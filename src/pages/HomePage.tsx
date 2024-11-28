import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import useCountries from '../hooks/useCountries';
import NavBar from '../components/NavBar';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Map from '../components/Map';
import { Facility } from '../components/FacilityInfo';

function HomePage() {
	const [facility, setFacility] = useState<Facility | null>(null);
	const { data: fetchedCountries } = useCountries();

	const countries = fetchedCountries.map(({ country, countryCode }) => ({
		label: country,
		value: countryCode,
	}));

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				md: `"nav nav" "main right"`,
				lg: `"nav nav nav" "left main right"`,
			}}
			templateColumns={{
				base: '1fr',
				md: '1fr 280px',
				lg: '320px 1fr 320px',
			}}
			height="100vh"
			width="100vw"
			position="fixed"
		>
			<GridItem area={'nav'}>
				<NavBar isHome={true} />
			</GridItem>
			<GridItem area={'left'} display={{ base: 'none', lg: 'block' }}>
				<LeftPanel countries={countries} />
			</GridItem>
			<GridItem area={'main'}>
				<Map onChangeFacility={setFacility} />
			</GridItem>
			<GridItem area={'right'} display={{ base: 'none', md: 'block' }}>
				<RightPanel facility={facility} onResetFacility={setFacility} />
			</GridItem>
		</Grid>
	);
}

export default HomePage;
