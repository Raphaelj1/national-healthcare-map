import { useEffect, useState } from 'react';
import {
	AdvancedMarker,
	APIProvider,
	Map,
	MapCameraChangedEvent,
	Pin,
} from '@vis.gl/react-google-maps';
import { Facility } from '../FacilityInfo';

const apiKey = import.meta.env.VITE_GMAP_API_KEY;
// const mapID = import.meta.env.VITE_GMAP_ID;

interface Props {
	onChangeFacility: (facility: Facility) => void;
}

function GoogleMaps({ onChangeFacility }: Props) {
	const [allFacilities, setAllFacilities] = useState<Facility[]>([]);
	const [visibleFacilities, setVisibleFacilities] = useState<Facility[]>([]);
	const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds | null>(null);

	useEffect(() => {
		const fetchAllFacilities = async () => {
			try {
				const response = await fetch('./data/facilities.json');
				const facilities = (await response.json()) as Array<Facility>;
				setAllFacilities(facilities);
			} catch (error) {
				console.error('Error fetching facilities:', error);
			}
		};
		fetchAllFacilities();
	}, []);

	useEffect(() => {
		if (mapBounds) {
			const facilitiesInView = allFacilities.filter((facility) => {
				const { lat, lng } = facility.location;
				return mapBounds.contains(new google.maps.LatLng(lat, lng));
			});
			setVisibleFacilities(facilitiesInView);
		}
	}, [mapBounds, allFacilities]);

	const handleMapCameraChange = (event: MapCameraChangedEvent) => {
		const { bounds } = event.detail;
		if (bounds) {
			const latLngBounds = new google.maps.LatLngBounds(
				{ lat: bounds.south, lng: bounds.west },
				{ lat: bounds.north, lng: bounds.east }
			);
			setMapBounds(latLngBounds);
		}
	};

	return (
		<APIProvider apiKey={apiKey}>
			<Map
				mapId={'1ff249d745fe7fd9'}
				style={{ width: '100%' }}
				defaultZoom={9}
				defaultCenter={{ lat: 9.376592036050976, lng: 8.300009430814388 }}
				onCameraChanged={handleMapCameraChange}
			>
				{visibleFacilities.map((facility, index) => (
					<AdvancedMarker
						title={facility.facilityInformation.facilityName}
						key={index}
						position={{ lat: facility.location.lat, lng: facility.location.lng }}
						onClick={() => onChangeFacility(facility)}
					>
						<Pin scale={0.75} glyphColor={'green'} borderColor={'green'} background={'#00AF54'} />
					</AdvancedMarker>
				))}
			</Map>
		</APIProvider>
	);
}

export default GoogleMaps;
