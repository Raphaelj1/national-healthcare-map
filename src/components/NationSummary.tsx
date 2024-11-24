import { Box, Heading, Link, Text } from '@chakra-ui/react';
import SummaryImage from './SummaryImage';
import SummaryStats from './SummaryStats';

function NationSummary() {
	return (
		<Box width="100%">
			<SummaryImage />
			<Heading fontSize="lg" marginTop={4}>
				Healthcare Infrastructure Map of Nigeria
			</Heading>
			<Text fontSize="sm" marginTop={2} color="gray.focusRing">
				The map offers crucial insights for decision-makers to evaluate healthcare coverage
				and identify areas for improvement. Click on markers to reveal detailed facility
				information, aiding informed planning and policy-making.
			</Text>
			<Text fontSize="sm" marginTop={2} color="gray.focusRing" whiteSpace='wrap'>
				Due to the extensive number of data points, the map works best at closer zoom
				levels. Explore our{' '}
				<Link
					variant="underline"
					href="https://nigerian-healthcare-map.netlify.app/"
					colorPalette="green"
					outline="none"
					display='inline'
				>
					innovative solution
				</Link>{' '}
				using the green button.
			</Text>
			<Box marginTop={6}>
				<SummaryStats />
			</Box>
		</Box>
	);
}

export default NationSummary;
