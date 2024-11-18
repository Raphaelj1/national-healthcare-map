import { useState, useRef, useEffect } from 'react';
import { Box, Flex, Heading, HStack, Input } from '@chakra-ui/react';
import SelectCountry from './SelectCountry';
import useVerify from '../hooks/useVerify';
import { Alert } from './ui/alert';
import { Button } from './ui/button';
import { Field } from './ui/field';

interface Props {
	countries: {
		label: string;
		value: string;
	}[];
}

function VerifyGridCode({ countries }: Props) {
	const [isShowAlert, setIsShowAlert] = useState(false);
	const [country, setCountry] = useState('');
	const gridCodeRef = useRef<HTMLInputElement>(null);
	const { data: gridInfo, isLoading, error, verify, reset } = useVerify();

	const onSubmit = () => {
		setIsShowAlert(false);
		reset();
		const gridCodeInput = gridCodeRef.current?.value.trim();

		if (gridCodeInput) {
			verify({ gridCode: gridCodeInput, countryCode: country });
		}
	};

	useEffect(() => {
		setIsShowAlert(!!error || !!gridInfo);
	}, [error, gridInfo]);

	return (
		<Box width="100%">
			<Heading size="sm" marginBottom={2} color={'gray.600'}>
				Verify Grid Code
			</Heading>
			<form
				style={{ width: '100%' }}
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<HStack>
					<Box flex={1}>
						<Field>
							<Input
								// textTransform="uppercase"
								ref={gridCodeRef}
								width="100%"
								placeholder="AAAA-ABCD"
								size="xs"
								onInput={() => {
									setIsShowAlert(false);
								}}
							/>
						</Field>
					</Box>
					<Box flex={1}>
						<SelectCountry
							countries={countries}
							onSelectCountry={(country) => setCountry(country)}
						/>
					</Box>
				</HStack>

				{isShowAlert && (
					<Alert
						height={'44px'}
						title={
							gridInfo?.isValid
								? 'Verified! Grid Code is valid.'
								: 'Invalid Grid Code.'
						}
						size="sm"
						status={gridInfo?.isValid ? 'success' : 'error'}
						marginTop={2}
						closable
						onClose={() => setIsShowAlert(false)}
					/>
				)}

				<Flex justifyContent="flex-end">
					<Button
						loading={isLoading}
						loadingText="Verifying"
						onClick={onSubmit}
						type="submit"
						size="xs"
						width={'calc(50% - 4px)'}
						marginTop={4}
						justifySelf="flex-end"
					>
						Verify
					</Button>
				</Flex>
			</form>
		</Box>
	);
}

export default VerifyGridCode;
