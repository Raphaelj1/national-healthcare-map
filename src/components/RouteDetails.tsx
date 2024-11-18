import { Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

interface Props {
	mapUrl: string | undefined;
}

function RouteDetails({ mapUrl }: Props) {
	if (!mapUrl) return null;

	return (
		<Link fontSize="xs" href={mapUrl} target="_blank" colorPalette="green">
			View Route <LuExternalLink />
		</Link>
	);
}

export default RouteDetails;
