import { APIProvider, Map } from '@vis.gl/react-google-maps';
import FacilityMap from './FacilityMap';
import { Facility } from '../../FacilityInfo';

const apiKey = import.meta.env.VITE_GMAP_API_KEY;
// const mapID = import.meta.env.VITE_GMAP_ID;

interface Props {
	facilities: Facility[];
	onChangeFacility: (facility: Facility) => void;
}

function GMapCluster({ facilities, onChangeFacility }: Props) {

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
