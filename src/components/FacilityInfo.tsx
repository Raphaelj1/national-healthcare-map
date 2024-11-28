import { Box, Heading, VStack } from '@chakra-ui/react';
import {
	FacilityInformation,
	LocationDetails,
	OperationalHours,
	ContactInformation,
	ServicesOffered,
	StaffingDetails,
	AdditionalDetails,
} from './FacilitySections';
import GenerateGridCode from './GenerateGridCode';

// interfaces
import { FacilityInformationInterface } from './FacilitySections/FacilityInformation';
import { LocationDetailsInterface } from './FacilitySections/LocationDetails';
import { OperationalHoursInterface } from './FacilitySections/OperationalHours';
import { ContactInformationInterface } from './FacilitySections/ContactInformation';
import { ServicesOfferedInterface } from './FacilitySections/ServicesOffered';
import { StaffingDetailsInterface } from './FacilitySections/StaffingDetails';
import { AdditionalDetailsInterface } from './FacilitySections/AdditionalDetails';

// facility structure
export interface Facility {
	facilityInformation: FacilityInformationInterface;
	locationDetails: LocationDetailsInterface;
	location: Location;
	operationalHours?: OperationalHoursInterface;
	contactInformation?: ContactInformationInterface;
	servicesOffered?: ServicesOfferedInterface;
	staffingDetails?: StaffingDetailsInterface;
	additionalDetails?: AdditionalDetailsInterface;
}

interface Props {
	facility: Facility | null;
}

interface Location {
	lat: number;
	lng: number;
}

function FacilityInfo({ facility }: Props) {
	if (!facility) return null;

	return (
		<Box>
			<Heading lineClamp={3} fontSize="md" marginBottom={2}>
				{facility.facilityInformation.facilityName}
			</Heading>
			{facility && (
				<GenerateGridCode
					description={facility.facilityInformation.facilityName}
					location={facility.location}
					countryCode="NG"
				/>
			)}
			<VStack alignItems="flex-start" gapY={6} marginTop={6} paddingBottom={8}>
				<FacilityInformation facilityInformation={facility.facilityInformation} />
				<LocationDetails locationDetails={facility.locationDetails} />
				<OperationalHours operationalHours={facility.operationalHours} />
				<ContactInformation contactInformation={facility.contactInformation} />
				<ServicesOffered servicesOffered={facility.servicesOffered} />
				<StaffingDetails staffingDetails={facility.staffingDetails} />
				<AdditionalDetails additionalDetails={facility.additionalDetails} />
			</VStack>
		</Box>
	);
}

export default FacilityInfo;
