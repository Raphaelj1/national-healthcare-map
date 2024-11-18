import { useState, useEffect } from 'react';
import { Tabs } from '@chakra-ui/react';
import { CloseButton } from './ui/close-button';
import NationSummary from './NationSummary';
import FacilityInfo from './FacilityInfo';
import { Facility } from './FacilityInfo';

interface Props {
	// countries: {
	// 	label: string;
	// 	value: string;
	// }[];
	facility: Facility | null;
}

interface TabItem {
	id: string;
	title: string;
	content: React.ReactNode;
}

const initialTabs: TabItem[] = [
	{
		id: '1',
		title: 'Overview',
		content: <NationSummary />,
	},
];

function RightPanel({ facility }: Props) {
	const [tabs, setTabs] = useState<TabItem[]>(initialTabs);
	const [selectedTab, setSelectedTab] = useState<string>(initialTabs[0].id);

	useEffect(() => {
		if (facility) {
			addFacilityTab();
		}
	}, [facility]);

	const addFacilityTab = () => {
		const newTabs = [...tabs];
		const newTab: TabItem = {
			id: '2',
			title: 'Facility Info',
			content: <FacilityInfo facility={facility} />,
		};
		newTabs[1] = newTab;
		setTabs([...newTabs]);
		setSelectedTab(newTab.id);
	};

	const removeFacilityTab = () => {
		if (tabs.length > 1) {
			const newTabs = [...tabs].slice(0, 1);
			setTabs(newTabs);
		}
	};

	return (
		<Tabs.Root
			value={selectedTab}
			variant="outline"
			size="sm"
			onValueChange={(e) => setSelectedTab(e.value)}
		>
			<Tabs.List flex="1 1 auto" paddingX={5} marginBottom={2}>
				{tabs.map((item) => (
					<Tabs.Trigger value={item.id} key={item.id}>
						{item.title}{' '}
						{item.id != '1' ? (
							<CloseButton
								as="span"
								role="button"
								size="2xs"
								me="-2"
								onClick={(e) => {
									e.stopPropagation();
									removeFacilityTab();
									setSelectedTab(tabs[0].id);
								}}
							/>
						) : (
							''
						)}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			<Tabs.ContentGroup height={'calc(100vh - 120px)'} paddingX={5} overflowY={'auto'}>
				{tabs.map((item) => (
					<Tabs.Content value={item.id} key={item.id}>
						{item.content}
					</Tabs.Content>
				))}
			</Tabs.ContentGroup>
		</Tabs.Root>
	);
}

export default RightPanel;
