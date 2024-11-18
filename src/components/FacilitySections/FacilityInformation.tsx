import { Box, VStack } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface FacilityInformationInterface {
	facilityName: string;
	state: string;
	lga?: string;
	ward?: string;
	facilityCode?: string;
	operationalStatus?: string;
	registrationStatus?: string;
	licenseStatus?: string;
	ownership?: string;
	ownershipType?: string;
	facilityLevel?: string;
	facilityLevelOption?: string;
	alternateName?: string;
}

interface Props {
	facilityInformation: FacilityInformationInterface;
}

function FacilityInformation({ facilityInformation }: Props) {
	if (!facilityInformation) return null;
	
	if (hasValue(facilityInformation)) return (
		<Box>
			{/* <Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Facility Information
			</Text> */}
			<VStack alignItems="flex-start">
				{facilityInformation.state && (
					<DetailEntry label='State' detail={facilityInformation.state} />
				)}
				{facilityInformation.lga && (
					<DetailEntry label='LGA' detail={facilityInformation.lga} />
				)}
				{facilityInformation.ward && (
					<DetailEntry label='Ward' detail={facilityInformation.ward} />
				)}
				{facilityInformation.facilityCode && (
					<DetailEntry label='Facility Code' detail={facilityInformation.facilityCode} />
				)}
				{facilityInformation.operationalStatus && (
					<DetailEntry label='Operational Status' detail={facilityInformation.operationalStatus} />
				)}
				{facilityInformation.registrationStatus && (
					<DetailEntry label='Registration Status' detail={facilityInformation.registrationStatus} />
				)}
				{facilityInformation.licenseStatus && (
					<DetailEntry label='License Status' detail={facilityInformation.licenseStatus} />
				)}
				{facilityInformation.ownership && (
					<DetailEntry label='Ownership' detail={facilityInformation.ownership} />
				)}
				{facilityInformation.ownershipType && (
					<DetailEntry label='Ownership Type' detail={facilityInformation.ownershipType} />
				)}
				{facilityInformation.facilityLevel && (
					<DetailEntry label='Facility Level' detail={facilityInformation.facilityLevel} />
				)}
				{facilityInformation.facilityLevelOption && (
					<DetailEntry label='Facility Level Option' detail={facilityInformation.facilityLevelOption} />
				)}
				{facilityInformation.alternateName && (
					<DetailEntry label='Altername Name' detail={facilityInformation.alternateName} />
				)}
			</VStack>
		</Box>
	);
}

export default FacilityInformation;
