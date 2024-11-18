import { Box, Text } from '@chakra-ui/react';

interface Props {
	distanceKm: number | undefined;
	estimatedTravelTime: string | undefined;
}

function DistanceDetails({ distanceKm, estimatedTravelTime }: Props) {
	if (!distanceKm || !estimatedTravelTime) {
		return (
			<Text fontSize="xs">
				The selected grid codes represent the same or an extremely close location, resulting
				in no measurable distance.
			</Text>
		);
	}

	return (
		<>
			<Text fontSize="xs">They're approximately {distanceKm}km apart.</Text>
			<Text fontSize="xs">You’ll probably get there in about {estimatedTravelTime}.</Text>
		</>
	);
}

export default DistanceDetails;
