import { NavLink } from 'react-router-dom';
import { Box, HStack, Image, Link, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';
import logo from '../assets/logo.svg';
import { Button } from './ui/button';
import { RxOpenInNewWindow } from 'react-icons/rx';
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
				<Link href="https://national-healthcare-map.vercel.app" outline="none">
					<Image src={logo} boxSize={'24px'} objectFit={'contain'} />
					<Text display={{ base: 'block', md: 'block' }} whiteSpace="nowrap">
						Labondo
					</Text>
				</Link>
				{/* {isHome && (
					<Box
						display={{base: 'none', md: 'block'}}
						width={{ base: '250px', lg: '350px', xl: '450px' }}
						marginLeft={{ base: 4, lg: 40 }}
					>
						<SearchInput onSearch={() => {}} />
					</Box>
				)} */}
				{isHome && (
					<Box
						display={{ base: 'none', md: 'block' }}
						width={{ base: '250px', lg: '350px', xl: '450px' }}
						marginLeft={{ base: 4, lg: 44 }}
					>
						<Link
							href="https://www.google.com/maps/d/viewer?mid=1cmzRGcXXSVxzXk0bMl1LBAZd60jLyik&femb=1&ll=9.418711781079402%2C8.390184839001025&z=6"
							target="blank"
							marginLeft={2}
						>
							<Button
								size="xs"
								fontWeight="normal"
								colorPalette="green"
								letterSpacing={0.5}
							>
								Click to view Regional Map <RxOpenInNewWindow />
							</Button>
						</Link>
					</Box>
				)}
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
