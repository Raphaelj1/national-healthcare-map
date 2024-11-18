import { Box, VStack, Text } from '@chakra-ui/react';
import DetailEntry from './DetailEntry';
import hasValue from '../../utils/hasValue';

export interface ContactInformationInterface {
	phoneNumber?: string;
	alternateNumber?: string;
	emailAddress?: string;
	website?: string;
}

interface Props {
	contactInformation: ContactInformationInterface | undefined;
}

function ContactInformation({ contactInformation }: Props) {
	if (!contactInformation) return null;

	if (hasValue(contactInformation)) return (
		<Box>
			<Text fontSize="sm" fontWeight="bold" marginBottom={2}>
				Contact Information
			</Text>
			<VStack alignItems="flex-start">
				{contactInformation.phoneNumber && (
					<DetailEntry label='Phone Number' detail={contactInformation.phoneNumber} />
				)}
				{contactInformation.alternateNumber && (
					<DetailEntry label='Alternate Number' detail={contactInformation.alternateNumber} />
				)}
				{contactInformation.emailAddress && (
					<DetailEntry label='Email Address' detail={contactInformation.emailAddress} />
				)}
				{contactInformation.website && (
					<DetailEntry label='Website' detail={contactInformation.website} />
				)}
			</VStack>
		</Box>
	);
}

export default ContactInformation;
