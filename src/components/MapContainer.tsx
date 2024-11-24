import { Box, IconButton } from '@chakra-ui/react';
import { Facility } from './FacilityInfo';
import GMapCluster from './GoogleMaps';
// import {GoogleMapsVIS} from './GoogleMaps';
import { LuLayers } from 'react-icons/lu';

interface Props {
	onChangeFacility: (facility: Facility) => void;
}

function MapContainer({ onChangeFacility }: Props) {
	return (
		<Box
			width="100%"
			height="calc(100vh - 76px)"
			backgroundColor="gray.500"
			borderRadius={4}
			position="relative"
		>
			<GMapCluster onChangeFacility={onChangeFacility} />
			{/* <GoogleMapsVIS onChangeFacility={onChangeFacility} /> */}
			<Box position="absolute" zIndex={1} top="64px" right="10px">
				<IconButton aria-label="Filter Layers" color="black" backgroundColor="white">
					<LuLayers />
				</IconButton>
			</Box>
		</Box>
	);
}

export default MapContainer;
