import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Link,
	List,
	Text,
	VStack,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';

function MapStory() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
			}}
			templateColumns={{
				base: '1fr',
			}}
			templateRows={{
				base: 'auto 1fr',
			}}
			height="100vh"
			width="100vw"
			position="fixed"
		>
			<GridItem area={'nav'}>
				<NavBar />
			</GridItem>
			<GridItem area={'main'} overflowY="auto">
				<Container spaceY={8} paddingY={12}>
					<Box spaceY={2}>
						<Heading fontSize='2xl' marginBottom={8}>
							Storytelling for the Map Competition: Transforming Healthcare
							Accessibility in Nigeria
						</Heading>
						<Heading fontSize="lg">
							Mapping Healthcare Infrastructure: Bridging Gaps, Saving Lives Data
							Sources
						</Heading>
						<List.Root spaceY={2}>
							<List.Item>
								Health Data: Extracted from the Nigerian Health Registry, providing
								detailed information on healthcare facilities, their ownership,
								operational status, and licensing.
							</List.Item>
							<List.Item>
								Population Data: Derived from the 2020 population estimates
								available on{' '}
								<Link
									variant="underline"
									href="https://data.humdata.org"
									colorPalette="blue"
								>
									data.humdata.org
								</Link>
								, enabling us to overlay demographic insights for actionable
								mapping.
							</List.Item>
						</List.Root>
					</Box>
					<VStack spaceY={4}>
						<Box spaceY={2}>
							<Heading>Introduction: The Need for a Map of Hope</Heading>
							<Text>
								In Nigeria, access to healthcare is a life-and-death issue. With a
								maternal mortality ratio of 531 deaths per 100,000 live births in
								2020 (World Health Organization), there is a glaring need to improve
								maternal and emergency care. Our map tells a story of how healthcare
								infrastructure, ownership, operational status, and licensing
								intersect to shape lives. By visualizing this data alongside
								population density and road accessibility, our interactive map
								becomes a tool for action—a guide for decision-makers to allocate
								resources where they are needed the most.
							</Text>
						</Box>
						<Box spaceY={2}>
							<Heading>Pop-up Information on Clickable Markers:</Heading>
							<Text>
								Every marker on the map represents a healthcare facility. By
								clicking on a marker, users gain access to a detailed snapshot of
								the facility. The pop-up information is structured into the
								following categories:
							</Text>
						</Box>
					</VStack>

					<VStack alignItems="flex-start" gap={6}>
						<Box spaceY={2}>
							<Heading>Facility Information</Heading>
							<List.Root spaceY={2}>
								<List.Item>Name of the facility</List.Item>
								<List.Item>State, Local Government Area (LGA), and Ward</List.Item>
								<List.Item>Facility Code</List.Item>
								<List.Item>
									Operational Status: Whether the facility is functional or
									non-functional
								</List.Item>
								<List.Item>Registration and Licensing Status</List.Item>
								<List.Item>
									Ownership details (e.g., Government, Private) and type
								</List.Item>
								<List.Item>
									Facility Level (Primary, Secondary, or Tertiary) and its
									specific options
								</List.Item>
								<List.Item>Alternate names (if any)</List.Item>
							</List.Root>
						</Box>

						<Box spaceY={2}>
							<Heading>Location Details</Heading>
							<List.Root spaceY={2}>
								<List.Item>Physical location description</List.Item>
								<List.Item>Postal address</List.Item>
							</List.Root>
						</Box>
						<Box spaceY={2}>
							<Heading>Geographic Coordinates</Heading>
							<List.Root>
								<List.Item>Longitude and Latitude</List.Item>
							</List.Root>
						</Box>
						<Box spaceY={2}>
							<Heading>Operational Hours</Heading>
							<List.Root spaceY={2}>
								<List.Item>Days of operation</List.Item>
								<List.Item>Hours of operation</List.Item>
							</List.Root>
						</Box>
						<Box spaceY={2}>
							<Heading>Contact Information</Heading>
							<List.Root spaceY={2}>
								<List.Item>Phone numbers (primary and alternate)</List.Item>
								<List.Item>Email address</List.Item>
								<List.Item>Website (if available)</List.Item>
							</List.Root>
						</Box>
						<Box spaceY={2}>
							<Heading>Services Offered</Heading>
							<List.Root spaceY={2}>
								<List.Item>Outpatient and inpatient services</List.Item>
								<List.Item>Mortuary and ambulance services</List.Item>
								<List.Item>
									Onsite facilities, including laboratory, imaging, and pharmacy
								</List.Item>
								<List.Item>Total number of available beds</List.Item>
							</List.Root>
						</Box>
						<Box spaceY={2}>
							<Heading>Staffing Details</Heading>
							<List.Root spaceY={2}>
								<List.Item>
									Numbers of doctors, nurses, midwives, and other healthcare
									professionals
								</List.Item>
								<List.Item>
									Detailed staffing levels for pharmacy technicians, lab
									scientists, environmental health officers, and more
								</List.Item>
							</List.Root>
						</Box>

						<Text>
							By clicking on markers, users can not only see this detailed information
							but also understand the larger story of healthcare accessibility,
							capacity, and quality across Nigeria. This feature empowers
							policymakers, NGOs, and healthcare advocates to make informed decisions
							based on real-time, granular data.
						</Text>
					</VStack>

					<Box spaceY={4}>
						<Heading>Understanding the Layers</Heading>
						<List.Root as="ol" spaceY={2}>
							<List.Item>
								Facility Types: A Hierarchy of Services
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Primary Facilities: The first line of defense for common
										illnesses and basic care.
									</List.Item>
									<List.Item>
										Secondary Facilities: Equipped for more complex medical
										needs.
									</List.Item>
									<List.Item>
										Tertiary Facilities: Centers of excellence, providing
										specialized treatments.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								Ownership Type: Who is Responsible?
								<List.Root ps="5">
									<List.Item>
										Facilities range from those managed by local, state, and
										federal governments to private entities and military
										formations. This layer reveals patterns of service delivery
										responsibility.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								Operational Status: Functional vs. Non-functional
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Operational: Facilities actively saving lives.
									</List.Item>
									<List.Item>
										Non-functional: Resources wasted, communities neglected.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								License Status: Ensuring Quality and Trust
								<List.Root ps="5">
									<List.Item>
										Data shows the ratio of licensed to unlicensed facilities,
										revealing critical compliance gaps.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								Emergency Services and Maternal Care: A Priority
								<List.Root ps="5">
									<List.Item>
										Highlighting the availability of 24-hour emergency and
										ambulance services, as well as maternal and childcare
										indicators like midwife availability, our map zeroes in on
										lifesaving capabilities.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								Diagnostics and Staffing: The Backbone of Care
								<List.Root ps="5">
									<List.Item>
										Layers for onsite laboratories, imaging facilities, and
										clusters of doctors, nurses, and lab technicians provide a
										complete picture of service readiness.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item spaceY={2}>
								Bed Capacity: Accommodation Matters
								<List.Root ps="5">
									<List.Item>
										Visualizing bed capacity alongside staffing shows whether
										facilities can meet patient demand.
									</List.Item>
								</List.Root>
							</List.Item>
						</List.Root>
					</Box>

					<VStack alignItems="flex-start" gapY={8}>
						<Box spaceY={2}>
							<Heading>
								Comparing Infrastructure with Population and Road Layers
							</Heading>
							<Text>
								Overlaying these facility layers with a population heatmap reveals
								areas where demand far outstrips supply, especially in rural and
								peri-urban regions. Adding the road layer highlights the logistical
								challenges of reaching care, particularly in emergencies.
							</Text>
						</Box>

						<Box spaceY={2}>
							<Heading>
								Opportunities and Gaps in Nigeria’s Healthcare Landscape
							</Heading>
							<List.Root as="ol" spaceY={2}>
								<List.Item>
									Identifying Gaps:
									<List.Root ps="5">
										<List.Item>
											Non-functional facilities in densely populated areas.
										</List.Item>
										<List.Item>
											Regions with no 24-hour emergency services or maternity
											care.
										</List.Item>
										<List.Item>
											Licensing discrepancies across ownership types.
										</List.Item>
									</List.Root>
								</List.Item>

								<List.Item>
									Opportunities for Improvement:
									<List.Root ps="5">
										<List.Item>
											Targeted funding for non-functional facilities.
										</List.Item>
										<List.Item>
											Improved road networks to connect remote areas with
											operational centers.
										</List.Item>
										<List.Item>
											Policies to enforce licensing and quality standards.
										</List.Item>
									</List.Root>
								</List.Item>
							</List.Root>
						</Box>
					</VStack>

					<VStack alignItems="flex-start" spaceY={2}>
						<Heading>Innovative Features of the Map</Heading>
						<List.Root as="ol" spaceY={2}>
							<List.Item>
								Interactive Layers:
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Users can toggle between layers such as maternal care,
										emergency services, and diagnostics to explore specific
										issues.
									</List.Item>
								</List.Root>
							</List.Item>
							<List.Item>
								Data Filtering:
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Filters for ownership type, operational status, and
										licensing allow tailored analysis.
									</List.Item>
								</List.Root>
							</List.Item>

							<List.Item>
								Pop-up Information:
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Clicking on a facility reveals real-time data, including
										staff numbers, bed capacity, and service types.
									</List.Item>
								</List.Root>
							</List.Item>

							<List.Item>
								Cluster Visualization:
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										Heatmaps and clustering tools emphasize regions with
										critical resource shortages.
									</List.Item>
								</List.Root>
							</List.Item>

							<List.Item>
								Population and Road Overlays:
								<List.Root ps="5" spaceY={2}>
									<List.Item>
										These integrations provide actionable insights for
										policymakers and NGOs.
									</List.Item>
								</List.Root>
							</List.Item>
						</List.Root>
					</VStack>

					<VStack alignItems="flex-start" gapY={8}>
						<Box spaceY={2}>
							<Heading>Why This Map Matters</Heading>
							<Text>
								This map is not just a visualization; it is a call to action. It can
								guide decisions to:
							</Text>
							<List.Root spaceY={2}>
								<List.Item>Revitalize non-functional facilities.</List.Item>
								<List.Item>
									Improve emergency and maternal care in underserved areas.
								</List.Item>
								<List.Item>
									Optimize resource allocation based on population density and
									accessibility.
								</List.Item>
							</List.Root>
							<Text>
								By addressing Nigeria’s healthcare challenges through data-driven
								storytelling, we can move closer to achieving Sustainable
								Development Goal 3: Good Health and Well-being.
							</Text>
						</Box>

						<Box spaceY={2}>
							<Heading>GridCode Integration</Heading>
							<Text>Our Map allows users to use the GridCode API to:</Text>
							<List.Root spaceY={2}>
								<List.Item>
									Generate unique, permanent GridCodes for precise locations
									(accurate to 3 meters).
								</List.Item>
								<List.Item>
									Map any location using its referenced GridCode.
								</List.Item>
								<List.Item>
									Provide route generation from any start or endpoint using
									GridCode.
								</List.Item>
							</List.Root>
						</Box>

						<Box spaceY={2}>
							<Heading>What We Achieved</Heading>
							<Text>
								We successfully implemented the following features using the
								GridCode API:
							</Text>
							<List.Root spaceY={2}>
								<List.Item>
									Generate Geocode Address: We can now create unique, precise
									GridCodes for various locations.
								</List.Item>
								<List.Item>
									Validate Geocode Address: The system ensures that the provided
									GridCode is valid and exists.
								</List.Item>
								<List.Item>
									Calculate Travel Time: Users can view travel times between two
									geocode addresses.
								</List.Item>
							</List.Root>
						</Box>

						<Box spaceY={2}>
							<Heading>Challenges Faced</Heading>
							<Text>
								Despite our progress, we encountered limitations with the GridCode
								API:
							</Text>
							<List.Root spaceY={2}>
								<List.Item>
									Displaying a Spot on a Map: While we could generate GridCodes,
									the API lacked support for displaying the geocode address on an
									interactive map.
								</List.Item>
								<List.Item>
									Navigation and Route Generation: The API doesn’t provide routing
									capabilities, making it impossible to calculate or display
									routes between two points.
								</List.Item>
								<List.Item>
									Calculate Travel Time: Users can view travel times between two
									geocode addresses.
								</List.Item>
							</List.Root>
						</Box>

						<Box spaceY={2}>
							<Heading>Conclusion: A Vision for the Future</Heading>
							<Text>
								Our map is a bridge between data and impact, helping stakeholders
								envision a future where every Nigerian has access to quality
								healthcare. By combining storytelling, technology, and advocacy,
								this project offers a blueprint for transforming lives—one facility
								at a time.
							</Text>
						</Box>
					</VStack>
				</Container>
			</GridItem>
		</Grid>
	);
}

export default MapStory;
