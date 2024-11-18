import { NavLink } from 'react-router-dom';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';
import logo from '../assets/logo.svg';
// import SearchInput from './SearchInput';

interface Props {
	isHome?: boolean;
}

function NavBar({ isHome = false }: Props) {
	const boldLink = ({ isActive }: { isActive: boolean }) => {
		return {
			fontWeight: isActive ? 'bold' : '',
		};
	};

	return (
		<HStack paddingX={'32px'} paddingY={'16px'} justifyContent={'space-between'}>
			<HStack>
				<Image src={logo} boxSize={'24px'} objectFit={'contain'} />
				<Text display={{ base: 'block', md: 'block' }} whiteSpace="nowrap">
					Labondo
				</Text>
				{/* {isHome && (
					<Box
						display={{base: 'none', md: 'block'}}
						width={{ base: '250px', lg: '350px', xl: '450px' }}
						marginLeft={{ base: 4, lg: 40 }}
					>
						<SearchInput onSearch={() => {}} />
					</Box>
				)} */}
			</HStack>
			<HStack>
				<Box display={{ base: 'block', md: 'none' }}>
					<HStack marginRight={{ base: 2, md: 8 }} gap={4}>
						{isHome ? (
							<NavLink
								to="/story"
								style={(isactive) => ({
									...boldLink(isactive),
									whiteSpace: 'nowrap',
								})}
							>
								Story-telling
							</NavLink>
						) : (
							<NavLink to="/" style={boldLink}>
								Map
							</NavLink>
						)}
					</HStack>
				</Box>

				<Box display={{ base: 'none', md: 'block' }}>
					<HStack marginRight={8} gap={4}>
						<NavLink to="/" style={boldLink}>
							Map
						</NavLink>
						<NavLink
							to="/story"
							style={(isactive) => ({ ...boldLink(isactive), whiteSpace: 'nowrap' })}
						>
							Story-telling
						</NavLink>
					</HStack>
				</Box>
				<ColorModeButton />
			</HStack>
		</HStack>
	);
}

export default NavBar;
