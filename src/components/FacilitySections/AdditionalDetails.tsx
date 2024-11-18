import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface AdditionalDetailsInterface {
	startDate?: string;
}

interface Props {
	additionalDetails: AdditionalDetailsInterface | undefined;
}

function AdditionalDetails({ additionalDetails }: Props) {
	if (!additionalDetails) return null;
	
	if (hasValue(additionalDetails)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Additional Details
			</Text>
			<VStack alignItems="flex-start">
				{additionalDetails.startDate && (
					<DetailEntry label='Start Date' detail={additionalDetails.startDate} />
				)}
			</VStack>
		</Box>
	);
}

export default AdditionalDetails;
