import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Center } from '@chakra-ui/react';
import { Facility } from '../FacilityInfo';

const apiKey = import.meta.env.VITE_GMAP_API_KEY || 'AIzaSyB8v1Cl-hmBb9U3XXcXvMkSVJ_tlIH-Lpg';

interface Props {
	onChangeFacility: (facility: Facility) => void;
}

function GoogleMaps({ onChangeFacility }: Props) {
	// const [heatmapData, setHeatmapData] = useState<any[]>([]);
	const [allFacilities, setAllFacilities] = useState<Facility[]>([]);
	// const [loading, setLoading] = useState<boolean>(true);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: apiKey,
	});

	useEffect(() => {
		const fetchAllFacilities = async () => {
			try {
				const response = await fetch('/data/facilities.json');
				const facilities = (await response.json()) as Array<Facility>;
				setAllFacilities(facilities.slice(0, 300)); // Update the state with the fetched data
			} catch (error) {
				console.error('Error fetching facilities :', error);
			} finally {
				// setLoading(false); // Set loading to false once data is fetched
			}
		};

		if (isLoaded) {
			fetchAllFacilities(); // Fetch the data once the map is loaded
		}
	}, [isLoaded]);

	const isValidLocation = (lat: number, lng: number) => {
		return !isNaN(lat) && !isNaN(lng);
	};

	if (!isLoaded) return <Center height="100%">Loading Map...</Center>;

	return (
		<GoogleMap
			mapContainerStyle={{ width: '100%', height: '100%' }}
			// center={{ lat: 9.376592036050976, lng: 8.300009430814388 }}
			zoom={6.5}
		>
			{allFacilities.length > 0 &&
				allFacilities.map((facility, index) => {
					const { lat, lng } = facility.location;

					if (isValidLocation(lat, lng)) {
						return (
							<Marker
								key={index}
								position={{
									lat: facility.location.lat,
									lng: facility.location.lng,
								}}
								onClick={() => onChangeFacility(facility)}
								title={facility.facilityInformation.facilityName}
							/>
						);
					} else {
						return null;
					}
				})}
		</GoogleMap>
	);
}

export default GoogleMaps;
