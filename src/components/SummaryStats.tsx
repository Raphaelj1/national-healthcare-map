import { Box } from '@chakra-ui/react';
import { StatLabel, StatRoot, StatValueText } from './ui/stat';

function SummaryStats() {
	return (
		<Box>
			<StatRoot>
				<StatLabel fontSize="sm">Total Healthcare Facilities </StatLabel>
				<StatValueText marginTop={-1}>33,715</StatValueText>
			</StatRoot>

			<StatRoot marginTop={2}>
				<StatLabel fontSize="sm">Operational Facilities</StatLabel>
				<StatValueText marginTop={-1} color="green.fg">
					33,611
				</StatValueText>
			</StatRoot>

			<StatRoot marginTop={2}>
				<StatLabel fontSize="sm">Non-Operational Facilities</StatLabel>
				<StatValueText marginTop={-1} color="red.fg">
					104
				</StatValueText>
			</StatRoot>
		</Box>
	);
}

export default SummaryStats;
