import { Span, Text } from '@chakra-ui/react';

interface Props {
	label: string;
	detail: string | number;
}

function DetailEntry({ label, detail }: Props) {
	return (
		<Text fontSize="sm">
			<Span opacity={0.6}>{label}: </Span>
			{detail}
		</Text>
	);
}

export default DetailEntry;
