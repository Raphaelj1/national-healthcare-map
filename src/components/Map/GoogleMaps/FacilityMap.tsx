import { useState, useEffect, useCallback } from 'react';
import { useMap, Pin, AdvancedMarker, Marker } from '@vis.gl/react-google-maps';
import SuperCluster from 'supercluster';
import { Facility } from '../../FacilityInfo';

interface Props {
	facilities: Facility[];
	onFacilitySelect: (facility: Facility) => void;
}

interface ClusterPoint {
	type: 'Feature';
	geometry: {
		type: 'Point';
		coordinates: [number, number];
	};
	properties: Facility & {
		cluster?: boolean;
		cluster_id?: number;
		point_count?: number;
	};
}

function FacilityMap({ facilities, onFacilitySelect }: Props) {
	const map = useMap();

	// Supercluster state
	const [index, setIndex] = useState<SuperCluster | null>(null);
	const [visibleMarkers, setVisibleMarkers] = useState<any[]>([]);

	// Initialize Supercluster
	useEffect(() => {
		if (!facilities.length) return;

		const clusterer = new SuperCluster({
			radius: 81, // Cluster radius in pixels
			maxZoom: 16, // Max zoom level for clustering
			minPoints: 3, // Minimum points to form a cluster
		});

		// Transform facilities to GeoJSON
		const points: ClusterPoint[] = facilities.map((facility) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [facility.location.lng, facility.location.lat],
			},
			properties: facility,
		}));

		// Load data into clusterer
		clusterer.load(points);
		setIndex(clusterer);
	}, [facilities]);

	// Update visible markers based on map viewport
	const updateVisibleMarkers = useCallback(() => {
		if (!map || !index) return;

		// Get current map bounds and zoom
		const bounds = map.getBounds();
		const zoom = map.getZoom() || 0;

		// Validate bounds
		if (!bounds) return;

		// Get clusters/markers for current view
		const markers = index.getClusters(
			[
				bounds.getSouthWest().lng(),
				bounds.getSouthWest().lat(),
				bounds.getNorthEast().lng(),
				bounds.getNorthEast().lat(),
			],
			zoom
		);

		setVisibleMarkers(markers);
	}, [map, index]);

	// Update markers when map moves
	useEffect(() => {
		if (!map) return;

		// Initial load
		updateVisibleMarkers();

		// Add idle listener
		const listener = map.addListener('idle', updateVisibleMarkers);

		// Cleanup
		return () => {
			google.maps.event.removeListener(listener);
		};
	}, [map, updateVisibleMarkers]);

	// Render markers and clusters
	const renderMarkers = () => {
		return visibleMarkers.map((marker) => {
			// Check if it's a cluster
			if (marker.properties.cluster) {
				return (
					<Marker
						key={`cluster-${marker.properties.cluster_id}`}
						position={{
							lat: marker.geometry.coordinates[1],
							lng: marker.geometry.coordinates[0],
						}}
						onClick={() => {
							// Zoom into cluster
							map?.setZoom((map.getZoom() || 0) + 1);
							map?.panTo({
								lat: marker.geometry.coordinates[1],
								lng: marker.geometry.coordinates[0],
							});
						}}
						label={{
							text: marker.properties.point_count.toString(),
							color: 'white',
							fontSize: '12px',
						}}
						icon={{
							path: google.maps.SymbolPath.CIRCLE,
							scale: 20,
							fillColor: 'green',
							fillOpacity: 0.8,
							strokeWeight: 2,
							strokeColor: 'white',
						}}
					/>
				);
			}

			// Regular facility marker
			return (
				<AdvancedMarker
					key={marker.properties.id}
					title={marker.properties.facilityInformation.facilityName}
					position={{
						lat: marker.geometry.coordinates[1],
						lng: marker.geometry.coordinates[0],
					}}
					onClick={() => {
						onFacilitySelect(marker.properties);
						map?.panTo({
							lat: marker.geometry.coordinates[1],
							lng: marker.geometry.coordinates[0],
						});
					}}
				>
					<Pin
						scale={0.75}
						glyphColor={'white'}
						borderColor={'#BC4749'}
						background={'#BC4749'}
					/>
				</AdvancedMarker>
			);
		});
	};

	return <>{renderMarkers()}</>;
}

export default FacilityMap;
