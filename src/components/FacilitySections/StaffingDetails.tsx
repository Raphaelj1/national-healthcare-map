import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface StaffingDetailsInterface {
	numberOfDoctors?: string | number;
	numberOfPharmacists?: string | number;
	numberOfPharmacyTechnicians?: string | number;
	numberOfDentists?: string | number;
	numberOfDentalTechnicians?: string | number;
	numberOfNurses?: string | number;
	numberOfMidwives?: string | number;
	numberOfNursesMidwives?: string | number;
	numberOfLabTechnicians?: string | number;
	numberOfLabScientists?: string | number;
	healthRecordsHIMOfficers?: string | number;
	numberOfCommunityHealthOfficers?: string | number;
	numberOfCommunityHealthExtensionWorkers?: string | number;
	numberOfEnvironmentalHealthOfficers?: string | number;
	numberOfHealthAttendantsAssistants?: string | number;
}

interface Props {
	staffingDetails: StaffingDetailsInterface | undefined;
}

function StaffingDetails({ staffingDetails }: Props) {
	if (!staffingDetails) return null;

	if (hasValue(staffingDetails)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Staffing Details
			</Text>
			<VStack alignItems="flex-start">
				{staffingDetails.numberOfDoctors && (
					<DetailEntry label='Number of Doctors' detail={staffingDetails.numberOfDoctors} />
				)}
				{staffingDetails.numberOfPharmacists && (
					<DetailEntry label='Number of Pharmacists' detail={staffingDetails.numberOfPharmacists} />
				)}
				{staffingDetails.numberOfPharmacyTechnicians && (
					<DetailEntry label='Number of Pharmacy Technicians' detail={staffingDetails.numberOfPharmacyTechnicians} />
				)}
				{staffingDetails.numberOfDentists && (
					<DetailEntry label='Number of Dentists' detail={staffingDetails.numberOfDentists} />
				)}
				{staffingDetails.numberOfDentalTechnicians && (
					<DetailEntry label='Number of Dental Technicians' detail={staffingDetails.numberOfDentalTechnicians} />
				)}
				{staffingDetails.numberOfNurses && (
					<DetailEntry label='Number of Nurses' detail={staffingDetails.numberOfNurses} />
				)}
				{staffingDetails.numberOfMidwives && (
					<DetailEntry label='Number of Midwives' detail={staffingDetails.numberOfMidwives} />
				)}
				{staffingDetails.numberOfNursesMidwives && (
					<DetailEntry label='Number of Nurses Midwives' detail={staffingDetails.numberOfNursesMidwives} />
				)}
				{staffingDetails.numberOfLabTechnicians && (
					<DetailEntry label='Number of Lab Technicians' detail={staffingDetails.numberOfLabTechnicians} />
				)}
				{staffingDetails.numberOfLabScientists && (
					<DetailEntry label='Number of Lab Scientists' detail={staffingDetails.numberOfLabScientists} />
				)}
				{staffingDetails.healthRecordsHIMOfficers && (
					<DetailEntry label='Health Records HIM Officers' detail={staffingDetails.healthRecordsHIMOfficers} />
				)}
				{staffingDetails.numberOfCommunityHealthOfficers && (
					<DetailEntry label='Number of Community Health Officers' detail={staffingDetails.numberOfCommunityHealthOfficers} />
				)}
				{staffingDetails.numberOfCommunityHealthExtensionWorkers && (
					<DetailEntry label='Number of Community Health Extension Workers' detail={staffingDetails.numberOfCommunityHealthExtensionWorkers} />
				)}
				{staffingDetails.numberOfEnvironmentalHealthOfficers && (
					<DetailEntry label='Number of Environmental Health Officers' detail={staffingDetails.numberOfEnvironmentalHealthOfficers} />
				)}
				{staffingDetails.numberOfHealthAttendantsAssistants && (
					<DetailEntry label='Number of Health Attendants Assistants' detail={staffingDetails.numberOfHealthAttendantsAssistants} />
				)}
			</VStack>
		</Box>
	);
}

export default StaffingDetails;
