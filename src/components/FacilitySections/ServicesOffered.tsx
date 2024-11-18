import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface ServicesOfferedInterface {
	outPatientServices?: string;
	inPatientServices?: string;
	motuaryServices?: string;
	ambulanceServices?: string;
	onsiteLaboratory?: string;
	onsiteImaging?: string;
	onsitePharmacy?: string;
	totalNumberOfBeds?: string | number;
}

interface Props {
	servicesOffered: ServicesOfferedInterface | undefined;
}

function ServicesOffered({ servicesOffered }: Props) {
	if (!servicesOffered) return null;

	if (hasValue(servicesOffered)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Services Offered
			</Text>
			<VStack alignItems="flex-start">
				{servicesOffered.outPatientServices && (
					<DetailEntry label='Out Patient Services' detail={servicesOffered.outPatientServices} />
				)}
				{servicesOffered.inPatientServices && (
					<DetailEntry label='In Patient Services' detail={servicesOffered.inPatientServices} />
				)}
				{servicesOffered.motuaryServices && (
					<DetailEntry label='Motuary Services' detail={servicesOffered.motuaryServices} />
				)}
				{servicesOffered.ambulanceServices && (
					<DetailEntry label='Ambulance Services' detail={servicesOffered.ambulanceServices} />
				)}
				{servicesOffered.onsiteLaboratory && (
					<DetailEntry label='Onsite Laboratory' detail={servicesOffered.onsiteLaboratory} />
				)}
				{servicesOffered.onsiteImaging && (
					<DetailEntry label='Onsite Imaging' detail={servicesOffered.onsiteImaging} />
				)}
				{servicesOffered.onsitePharmacy && (
					<DetailEntry label='Onsite Pharmacy' detail={servicesOffered.onsitePharmacy} />
				)}
				{servicesOffered.totalNumberOfBeds && (
					<DetailEntry label='Total Number of Beds' detail={servicesOffered.totalNumberOfBeds} />
				)}
			</VStack>
		</Box>
	);
}

export default ServicesOffered;
