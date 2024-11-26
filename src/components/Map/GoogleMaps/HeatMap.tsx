import { useEffect, useState } from 'react';
import { Spinner, Center, IconButton, Box } from '@chakra-ui/react';
import { useMap } from '@vis.gl/react-google-maps';
import { LuFlame } from 'react-icons/lu';

const NIGERIA_BOUNDS = {
	north: 13.892007,
	south: 4.277144,
	east: 14.680073,
	west: 2.668432,
};

function HeatMap() {
	const map = useMap();
	const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);
	const [isHeatmapVisible, setIsHeatmapVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (map && window.google?.maps?.visualization) {
			initializeHeatmap();
		}
	}, [map]);

	const initializeHeatmap = async () => {
		try {
			const response = await fetch('/data/heatmap.json');
			const data = await response.json();

			const heatmapData = data
				.filter(
					(item: any) =>
						item.latitude >= NIGERIA_BOUNDS.south &&
						item.latitude <= NIGERIA_BOUNDS.north &&
						item.longitude >= NIGERIA_BOUNDS.west &&
						item.longitude <= NIGERIA_BOUNDS.east
				)
				.map((item: any) => ({
					location: new google.maps.LatLng(item.latitude, item.longitude),
					weight: item.value,
				}));

			const heatmapLayer = new google.maps.visualization.HeatmapLayer({
				data: heatmapData,
				map: isHeatmapVisible ? map : null,
				radius: 20,
			});

			setHeatmap(heatmapLayer);
			setIsLoading(false);
		} catch (error) {
			console.error('Error loading heatmap data:', error);
			setIsLoading(false);
		}
	};

	const toggleHeatmap = () => {
		if (heatmap && map) {
			const newVisibility = !isHeatmapVisible;
			heatmap.setMap(newVisibility ? map : null);
			setIsHeatmapVisible(newVisibility);
		}
	};

	return (
		<>
			{isLoading && (
				<Center
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg="rgba(255, 255, 255, 0.8)"
					zIndex={10}
				>
					<Spinner size="lg" />
				</Center>
			)}

			<Box
				position="absolute"
				zIndex={2}
				top="64px"
				right="10px"
				shadow="0px 0px 1px 2px rgba(0, 0, 0, .055)"
			>
				<IconButton
					aria-label="Filter Layers"
					backgroundColor={isHeatmapVisible ? '#6A994E' : 'white'}
					onClick={toggleHeatmap}
				>
					<LuFlame color={isHeatmapVisible ? 'white' : '#666'} />
				</IconButton>
			</Box>
		</>
	);
}

export default HeatMap;
