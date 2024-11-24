import { useEffect, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import FacilityMap from './FacilityMap';
import { Facility } from '../FacilityInfo';

const apiKey = import.meta.env.VITE_GMAP_API_KEY;
// const mapID = import.meta.env.VITE_GMAP_ID;

interface Props {
	onChangeFacility: (facility: Facility) => void;
}

function GMapCluster({ onChangeFacility }: Props) {
	const [facilities, setFacilities] = useState<Facility[] | []>([]);

	// Fetch facilities on mount
	useEffect(() => {
		const fetchAllFacilities = async () => {
			try {
				const response = await fetch('/data/facilities.json');
				const facilities = (await response.json()) as Array<Facility>;
				setFacilities(facilities);
				console.log(facilities.length);
			} catch (error) {
				console.error('Error fetching facilities:', error);
			}
		};
		fetchAllFacilities();
	}, []);

	return (
		<APIProvider apiKey={apiKey}>
			<Map
				mapId={'1ff249d745fe7fd9'}
				style={{ width: '100%' }}
				defaultZoom={6.2}
				defaultCenter={{ lat: 9.376592036050976, lng: 8.300009430814388 }}
			>
				<FacilityMap facilities={facilities} onFacilitySelect={onChangeFacility} />
			</Map>
		</APIProvider>
	);
}

export default GMapCluster;
