import { useMemo, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from '../ui/radio';
import { Button } from '../ui/button';
import { Facility } from '../FacilityInfo';

interface Filters {
	facility: string;
	ownership: string;
	status: string;
	diagnostics: string;
	ambulance: string;
	license: string;
}

interface Props {
	facilities: Facility[];
	setFilteredFacilities: (facilities: Facility[]) => void;
	isShowFilter: boolean;
	setIsShowFilter: (isShow: boolean) => void;
}

function MapFilterBox({ facilities, setFilteredFacilities, isShowFilter, setIsShowFilter }: Props) {
	const [facilityCount, setFacilityCount] = useState(0);
	const [filters, setFilters] = useState<Filters>({
		facility: 'All',
		ownership: 'All',
		status: 'All',
		diagnostics: 'All',
		ambulance: 'All',
		license: 'All',
	});

	const handleFilterChange = (category: string, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[category]: value,
		}));
	};

	const applyFilters = (facilities: Facility[], filters: Filters) => {
		return facilities.filter((facility) => {
			const { facilityInformation, servicesOffered } = facility;

			return (
				(filters.facility === 'All' ||
					facilityInformation.facilityLevel === filters.facility) &&
				(filters.ownership === 'All' ||
					facilityInformation.ownershipType === filters.ownership ||
					facilityInformation.ownership === filters.ownership) &&
				(filters.status === 'All' ||
					facilityInformation.operationalStatus === filters.status) &&
				(filters.diagnostics === 'All' ||
					servicesOffered?.onsiteImaging === filters.diagnostics ||
					servicesOffered?.onsiteLaboratory === filters.diagnostics) &&
				(filters.ambulance === 'All' ||
					servicesOffered?.ambulanceServices === filters.ambulance) &&
				(filters.license === 'All' || facilityInformation.licenseStatus === filters.license)
			);
		});
	};

	const filterFacilities = () => {
		const filtered = applyFilters(facilities, filters);
		setFilteredFacilities(filtered);
	};

	useMemo(() => {
		const filtered = applyFilters(facilities, filters);
		setFacilityCount(filtered.length);
	}, [facilities, filters]);

	if (!isShowFilter) return null;

	return (
		<Box
			color="black"
			backgroundColor="white"
			borderRadius={4}
			shadow="0px 0px 2px 2px rgba(0, 0, 0, .075)"
			padding={4}
			width="350px"
		>
			<Box>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					Facility
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.facility}
					onValueChange={(e) => handleFilterChange('facility', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="Primary">Primary</Radio>
						<Radio value="Secondary">Secondary</Radio>
						<Radio value="Tertiary">Tertiary</Radio>
					</Flex>
				</RadioGroup>
			</Box>

			<Box marginTop={5}>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					Ownership
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.ownership}
					onValueChange={(e) => handleFilterChange('ownership', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="Private">Private</Radio>
						<Radio value="Military & Paramilitary formations">Military</Radio>
						<Radio value="Local Government">Local Government</Radio>
						<Radio value="State Government">State Government</Radio>
						<Radio value="Federal Government">Federal Government</Radio>
					</Flex>
				</RadioGroup>
			</Box>

			<Box marginTop={5}>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					Status
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.status}
					onValueChange={(e) => handleFilterChange('status', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="Operational">Operational</Radio>
						<Radio value="Not Functional">Non-operational</Radio>
					</Flex>
				</RadioGroup>
			</Box>

			<Box marginTop={5}>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					Diagnostics
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.diagnostics}
					onValueChange={(e) => handleFilterChange('diagnostics', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="yes">Yes</Radio>
						<Radio value="no">No</Radio>
					</Flex>
				</RadioGroup>
			</Box>

			<Box marginTop={5}>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					Ambulance Services
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.ambulance}
					onValueChange={(e) => handleFilterChange('ambulance', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="yes">Yes</Radio>
						<Radio value="no">No</Radio>
					</Flex>
				</RadioGroup>
			</Box>

			<Box marginTop={5}>
				<Text fontSize="sm" fontWeight="bold" color="gray.600" marginBottom={1}>
					License Status
				</Text>
				<RadioGroup
					variant="outline"
					size="sm"
					defaultValue="All"
					colorPalette="green"
					value={filters.license}
					onValueChange={(e) => handleFilterChange('license', e.value)}
				>
					<Flex gapX={4} flexWrap="wrap">
						<Radio value="All">Default (All)</Radio>
						<Radio value="Licensed">Licensed</Radio>
						<Radio value="Not Licensed">Not Licensed</Radio>
						<Radio value="Not Applicable">Canceled</Radio>
					</Flex>
				</RadioGroup>
			</Box>
			<Flex marginTop={5} justifyContent="flex-end" gap={2}>
				<Button
					color="black"
					onClick={() => {
						setIsShowFilter(false);
					}}
					size="xs"
					variant="outline"
					paddingX={8}
				>
					Cancel
				</Button>
				<Button
					disabled={!facilityCount}
					color="white"
					backgroundColor="black"
					onClick={() => {
						filterFacilities();
						setIsShowFilter(false);
					}}
					size="xs"
					paddingX={8}
				>
					Show ({facilityCount})
				</Button>
			</Flex>
		</Box>
	);
}

export default MapFilterBox;
