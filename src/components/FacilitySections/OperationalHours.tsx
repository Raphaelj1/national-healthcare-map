import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface OperationalHoursInterface {
	daysOfOperation: string;
	hoursOfOperation: string;
}

interface Props {
	operationalHours: OperationalHoursInterface | undefined;
}

function OperationalHours({ operationalHours }: Props) {
	if (!operationalHours) return null;
	
	if (hasValue(operationalHours)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Operational Hours
			</Text>
			<VStack alignItems="flex-start">
				{operationalHours.daysOfOperation && (
					<DetailEntry label='Days of Operation' detail={operationalHours.daysOfOperation} />
				)}
				{operationalHours.hoursOfOperation && (
					<DetailEntry label='Hours of Operation' detail={operationalHours.hoursOfOperation} />
				)}
			</VStack>
		</Box>
	);
}

export default OperationalHours;
