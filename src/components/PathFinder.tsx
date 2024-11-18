import { useRef, useState } from 'react';
import { Box, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react';
import { Alert } from './ui/alert';
import { Button } from './ui/button';
import useDistance from '../hooks/useDistance';
import useRoute from '../hooks/useRoutes';
import SelectCountry from './SelectCountry';
import PathFinderSummary from './PathFinderSummary';

import { LuSplit } from 'react-icons/lu';

interface Props {
	countries: {
		label: string;
		value: string;
	}[];
}

interface PathQuery {
	sourceCountryCode: string;
	destinationCountryCode: string;
}

function PathFinder({ countries }: Props) {
	const [pathQuery, setPathQuery] = useState<PathQuery>({
		sourceCountryCode: '',
		destinationCountryCode: '',
	});

	const sourceGridCodeRef = useRef<HTMLInputElement>(null);
	const destinationGridCodeRef = useRef<HTMLInputElement>(null);

	const {
		data: distanceInfo,
		isLoading: isDistanceLoading,
		error: distanceError,
		post: calculateDistance,
		reset: resetDistance,
	} = useDistance();

	const {
		data: routeInfo,
		isLoading: isRouteLoading,
		error: routeError,
		post: findRoute,
		reset: resetRoute,
	} = useRoute();

	const closeAllAlerts = () => {
		resetRoute();
		resetDistance();
	};

	const onCalculateDistance = () => {
		const sourceGridCodeInput = sourceGridCodeRef.current?.value.trim();
		const destinationGridCodeInput = destinationGridCodeRef.current?.value.trim();
		resetDistance();
		if (sourceGridCodeInput && destinationGridCodeInput) {
			calculateDistance({
				sourceGridCode: sourceGridCodeInput,
				destinationGridCode: destinationGridCodeInput,
				sourceCountryCode: pathQuery.sourceCountryCode,
				destinationCountryCode: pathQuery.destinationCountryCode,
			});
		}
	};

	const onFindRoute = () => {
		const sourceGridCode = sourceGridCodeRef.current?.value.trim();
		const destinationGridCode = destinationGridCodeRef.current?.value.trim();
		resetRoute();

		if (sourceGridCode && destinationGridCode) {
			const routeFormData = new FormData();
			routeFormData.append('gridCodes[0]', sourceGridCode);
			routeFormData.append('gridCodes[1]', destinationGridCode);
			routeFormData.append('countryCodes[0]', pathQuery.sourceCountryCode);
			routeFormData.append('countryCodes[1]', pathQuery.destinationCountryCode);
			findRoute(routeFormData);
		}
	};

	return (
		<>
			<Box width="100%" marginBottom={2}>
				<Heading size="sm" marginBottom={2} color={'gray.600'}>
					Path Finder
				</Heading>

				<Text fontSize="xs" color="gray.500" marginBottom={1}>
					From
				</Text>
				<HStack marginBottom={2}>
					<Box flex={1}>
						<Input
							ref={sourceGridCodeRef}
							placeholder="Grid Code"
							size="xs"
							fontSize="xs"
							onInput={closeAllAlerts}
						/>
					</Box>
					<Box flex={1}>
						<SelectCountry
							countries={countries}
							onSelectCountry={(country) =>
								setPathQuery((prev) => ({ ...prev, sourceCountryCode: country }))
							}
						/>
					</Box>
				</HStack>

				<Text fontSize="xs" color="gray.500" marginBottom={1}>
					To
				</Text>
				<HStack fontSize={'xs'}>
					<Box flex={1}>
						<Input
							ref={destinationGridCodeRef}
							placeholder="Grid Code"
							size="xs"
							onInput={closeAllAlerts}
						/>
					</Box>
					<Box flex={1}>
						<SelectCountry
							countries={countries}
							onSelectCountry={(country) =>
								setPathQuery((prev) => ({
									...prev,
									destinationCountryCode: country,
								}))
							}
						/>
					</Box>
				</HStack>
				{distanceError && (
					<Alert
						height="44px"
						title="Failed to calculate distance."
						size="sm"
						status="error"
						marginTop={2}
						closable
						onClose={resetDistance}
					/>
				)}
				{(routeError || routeInfo) && (
					<Alert
						height="44px"
						title={
							!routeInfo?.mapUrl && routeInfo?.details?.length === 2
								? "Route doesn't exist"
								: 'Invalid Grid Codes.'
						}
						size="sm"
						status={
							!routeInfo?.mapUrl && routeInfo?.details?.length === 2
								? 'warning'
								: 'error'
						}
						marginTop={2}
						closable
						onClose={resetRoute}
					/>
				)}

				<Flex gapX={2} marginTop={4}>
					<Button
						loading={isDistanceLoading}
						loadingText="Comparing"
						size="xs"
						paddingX={6}
						flex={1}
						onClick={onCalculateDistance}
					>
						Compare Distance
					</Button>
					<Button
						loading={isRouteLoading}
						loadingText="Finding"
						size="xs"
						paddingX={6}
						flex={1}
						onClick={onFindRoute}
					>
						Find Route <LuSplit />
					</Button>
				</Flex>
			</Box>
			{(distanceInfo || routeInfo?.mapUrl) && (
				<PathFinderSummary distanceInfo={distanceInfo} routeInfo={routeInfo} />
			)}
		</>
	);
}

export default PathFinder;
