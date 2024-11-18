import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface LocationDetailsInterface {
	physicalLocation?: string;
	postalAddress?: string;
}

interface props {
	locationDetails: LocationDetailsInterface;
}

function LocationDetails({ locationDetails }: props) {
	if (!locationDetails) return null;

	if (hasValue(locationDetails)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Location Details
			</Text>
			<VStack alignItems="flex-start">
				{locationDetails.physicalLocation && (
					<DetailEntry label='Physical Location' detail={locationDetails.physicalLocation} />
				)}
				{locationDetails.postalAddress && (
					<DetailEntry label='Postal Address' detail={locationDetails.postalAddress} />
				)}
			</VStack>
		</Box>
	);
}

export default LocationDetails;
