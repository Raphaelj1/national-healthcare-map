import { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { Facility } from '../FacilityInfo';
import { LuLayers } from 'react-icons/lu';
import GMapCluster from './GoogleMaps';
import MapFilterBox from './MapFilterBox';

interface Props {
	onChangeFacility: (facility: Facility) => void;
}

function MapContainer({ onChangeFacility }: Props) {
	const [allFacilities, setAllFacilities] = useState<Facility[] | []>([]);
	const [filteredFacilities, setFilteredFacilities] = useState<Facility[] | []>([]);
	const [isShowFilter, setIsShowFilter] = useState(false);

	// Fetch facilities on mount
	useEffect(() => {
		const fetchAllFacilities = async () => {
			try {
				const response = await fetch('/data/facilities.json');
				const allFacilities = (await response.json()) as Array<Facility>;
				setAllFacilities(allFacilities);
			} catch (error) {
				console.error('Error fetching facilities:', error);
			}
		};
		fetchAllFacilities();
	}, []);

	useEffect(() => {
		setFilteredFacilities(allFacilities);
		// code to reset filters
	}, [allFacilities]);

	return (
		<Box
			width="100%"
			height="calc(100vh - 76px)"
			backgroundColor="gray.500"
			borderRadius={4}
			position="relative"
		>
			<GMapCluster facilities={filteredFacilities} onChangeFacility={onChangeFacility} />
			<Box
				position="absolute"
				zIndex={1}
				top="120px"
				right="10px"
				shadow="0px 0px 1px 2px rgba(0, 0, 0, .055)"
			>
				<IconButton
					aria-label="Filter Layers"
					color="#eee"
					backgroundColor="white"
					onClick={() => setIsShowFilter((prev) => !prev)}
				>
					<LuLayers color='#666' />
				</IconButton>
			</Box>
			{isShowFilter && (
				<Box
					width="100%"
					height="100%"
					backgroundColor="black"
					opacity={0.25}
					position="absolute"
					top={0}
					onClick={() => setIsShowFilter(false)}
				/>
			)}

			<Box position="absolute" zIndex={1} top="10px" right="64px">
				<MapFilterBox
					facilities={allFacilities}
					setFilteredFacilities={setFilteredFacilities}
					isShowFilter={isShowFilter}
					setIsShowFilter={setIsShowFilter}
				/>
			</Box>
		</Box>
	);
}

export default MapContainer;
