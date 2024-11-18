import { useEffect, useState } from 'react';
import { createListCollection } from '@chakra-ui/react';
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '../components/ui/select';

interface Props {
	countries: {
		label: string;
		value: string;
	}[];
	onSelectCountry: (country: string) => void;
}

function SelectCountry({ countries, onSelectCountry }: Props) {
	const countryList = createListCollection({
		items: countries,
	});

	// Set default country to Nigeria
	const [selectedCountry, setSelectedCountry] = useState('NG');

	useEffect(() => {
		onSelectCountry(selectedCountry);
	}, []);

	return (
		<SelectRoot
			collection={countryList}
			size="xs"
			width="100%"
			// width="240px"
			value={[selectedCountry]}
			onValueChange={(e) => {
				onSelectCountry(e.value[0]);
				setSelectedCountry(e.value[0]);
			}}
		>
			<SelectTrigger>
				<SelectValueText placeholder="Select country" />
			</SelectTrigger>
			<SelectContent>
				{countryList.items.map((country) => (
					<SelectItem item={country} key={country.value}>
						{country.label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectRoot>
	);
}
export default SelectCountry;
