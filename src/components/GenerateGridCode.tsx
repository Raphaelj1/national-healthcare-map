import { useEffect, useState } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { ClipboardIconButton, ClipboardRoot } from './ui/clipboard';
import { Button } from './ui/button';
import { LuPlus } from 'react-icons/lu';
import useGenerate from '../hooks/useGenerate';
import useSave from '../hooks/useSave';

import incrementLastTwoDigits from '../utils/incrementLastTwoDigits';

interface Props {
	description: string;
	location: {
		lat: number;
		lng: number;
	};
	countryCode: string;
}

function GenerateGridCode({ description, location, countryCode }: Props) {
	const [generatedGridCode, setGeneratedGridCode] = useState('');

	const { data: gridCode, isLoading, post: generateGridCode, reset: resetGridCode } = useGenerate();
	const {
		data: savedGridCode,
		message,
		isLoading: isSaveLoading,
		post: saveGridCode,
		reset: resetSavedGridCode
	} = useSave();

	useEffect(() => {
		setGeneratedGridCode('')
	}, [location])

	useEffect(() => {
		if (gridCode) {
			onSave();
		}
	}, [gridCode]);

	useEffect(() => {
		if (savedGridCode) {
			setGeneratedGridCode(savedGridCode.gridCode);
		} else if (message) {
			handleMessageParsing(message, gridCode?.gridcode);
		}
	}, [savedGridCode, message]);

	const handleMessageParsing = (message: string, fallbackGridCode?: string) => {
		if (message.includes('existing gridcode')) {
			const match = message.match(/\( (.*?) \)/);
			if (match && match[1]) setGeneratedGridCode(match[1]);
		} else if (message.toLowerCase().includes('successful') && fallbackGridCode) {
			setGeneratedGridCode(fallbackGridCode);
		} else if (message.toLowerCase().includes('undefined array key') && fallbackGridCode) {
			setGeneratedGridCode(fallbackGridCode);
		}
	};

	const onGenerate = () => {
		const generateFormData = new FormData();
		generateFormData.append('countryCode', 'in');
		generateFormData.append('lat', `${location.lat}`);
		generateFormData.append('long', `${location.lng}`);
		generateGridCode(generateFormData);
	};

	const onSave = () => {
		const lat = location.lat.toString();
		const long = location.lng.toString();

		let latA = lat;
		let longA = long;
		let latB = incrementLastTwoDigits(lat, 1);
		let longB = incrementLastTwoDigits(long, 1);
		let latC = incrementLastTwoDigits(lat, 2);
		let longC = incrementLastTwoDigits(long, 3);

		if (gridCode) {
			const saveFormData = new FormData();
			saveFormData.append('countryCode', countryCode);
			saveFormData.append('gridcode', gridCode.gridcode);
			saveFormData.append('categoryId', 'CE297CDE-CFC5-4FBF-B8A9-45D8E72855F1');
			saveFormData.append('titleDescription', description);
			saveFormData.append('latA', latA);
			saveFormData.append('longA', longA);
			saveFormData.append('latB', latB);
			saveFormData.append('longB', longB);
			saveFormData.append('latC', latC);
			saveFormData.append('longC', longC);
			saveFormData.append('generateAction', 'USE_EXISTING');
			saveGridCode(saveFormData);
		}
	};

	return (
		<Box>
			{generatedGridCode ? (
				<HStack>
					<Text
						fontSize="xs"
						letterSpacing={4}
						fontWeight="bold"
						textTransform="uppercase"
						paddingX={4}
						paddingY={2}
						borderWidth={2}
						borderRadius={4}
					>
						{generatedGridCode}
					</Text>
					<ClipboardRoot value={generatedGridCode} timeout={1500} marginLeft={-2}>
						<ClipboardIconButton size="xs" variant="plain" />
					</ClipboardRoot>
				</HStack>
			) : (
				<HStack>
					<Button
						onClick={onGenerate}
						loading={isLoading || isSaveLoading}
						loadingText={isLoading ? 'Generating Grid Code' : 'Finalizing Grid Code...'}
						size="xs"
						variant="solid"
					>
						Generate Grid Code
						<LuPlus />
					</Button>
				</HStack>
			)}
		</Box>
	);
}

export default GenerateGridCode;
