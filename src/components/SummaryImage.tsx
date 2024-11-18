import { Box, Center, Image } from '@chakra-ui/react';
import map from '../assets/ngMap.svg';

function SummaryImage() {
	return (
		<Box width="100%" paddingX={8} paddingY={4} borderRadius={4} backgroundColor='green.muted' >
			<Center>
				<Image width={24} src={map} objectFit="contain" />
			</Center>
		</Box>
	);
}

export default SummaryImage;
