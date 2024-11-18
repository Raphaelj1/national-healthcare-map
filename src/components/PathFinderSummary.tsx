import { Box, Heading, VStack } from '@chakra-ui/react';
import DistanceDetails from './DistanceDetails';
import RouteDetails from './RouteDetails';
import { DistanceData } from '../hooks/useDistance';
import { RouteData } from '../hooks/useRoutes';

interface Props {
	routeInfo: RouteData | null;
	distanceInfo: DistanceData | null;
}

function PathFinderSummary({ distanceInfo = null, routeInfo = null }: Props) {
	if (!distanceInfo && !routeInfo) return null;

	return (
		<Box>
			<Heading size="sm" marginBottom={4} color={'gray.400'}>
				Path Summary
			</Heading>
			<VStack gapY={2} alignItems="flex-start">
				<DistanceDetails
					distanceKm={distanceInfo?.distanceKm}
					estimatedTravelTime={distanceInfo?.estimatedTravelTime}
				/>
				<RouteDetails mapUrl={routeInfo?.mapUrl} />
			</VStack>
		</Box>
	);
}

export default PathFinderSummary;
