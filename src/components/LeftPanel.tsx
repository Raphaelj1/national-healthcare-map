import { Box, VStack } from '@chakra-ui/react';
import VerifyGridCode from './VerifyGridCode';
import PathFinder from './PathFinder';

interface Props {
	countries: {
		label: string;
		value: string;
	}[];
}

function LeftPanel({ countries }: Props) {
	return (
		<Box
			width="100%"
			height={'calc(100vh - 76px)'}
			paddingTop={4}
			paddingX={5}
			overflowY={'auto'}
		>
			<VStack alignItems="flex-start" gapY={6}>
				<VerifyGridCode countries={countries} />
				<PathFinder countries={countries} />
			</VStack>
		</Box>
	);
}

export default LeftPanel;
