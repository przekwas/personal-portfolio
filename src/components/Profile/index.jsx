import styled from 'styled-components';
import { logger } from '../../utils/log-handler';
import { useState } from 'react';
import { screens } from '../../utils/styled-breakpoints';
import {
	Window,
	WindowContent,
	WindowHeader,
	Tabs,
	Tab,
	TabBody,
	TextField,
	Fieldset,
	Checkbox,
	NumberField,
	Cutout,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableHeadCell,
	TableDataCell
} from 'react95';

const Profile = () => {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabChange = (e, value) => setActiveTab(value);

	const handleLog = () => {
		logger("💖 You can't change who I am 💖");
	};

	return (
		<Wrapper>
			<Window className="window">
				<WindowHeader>
					<span>profile.exe</span>
				</WindowHeader>
				<WindowContent>
					<Tabs value={activeTab} onChange={handleTabChange}>
						<Tab value={0}>General</Tab>
						<Tab value={1}>Tech</Tab>
						<Tab value={2}>Hobbies</Tab>
						<Tab value={3}>Pets</Tab>
					</Tabs>
					<TabBody>
						{activeTab === 0 && (
							<>
								<FlexDiv>
									<FieldLabel>First Name</FieldLabel>
									<TextField value={'Luke'} fullWidth onChange={handleLog} />
								</FlexDiv>
								<FlexDiv>
									<FieldLabel>Last Name</FieldLabel>
									<TextField value={'Przekwas'} fullWidth onChange={handleLog} />
								</FlexDiv>
								<FlexDiv>
									<FieldLabel>Age</FieldLabel>
									<NumberField
										width="100%"
										min={34}
										max={34}
										defaultValue={34}
										onChange={handleLog}
									/>
								</FlexDiv>
								<FlexDiv>
									<Fieldset label="Status">
										<Checkbox
											checked={true}
											label="Employed"
											onChange={handleLog}
										/>
										<br />
										<Checkbox
											checked={true}
											label="Married"
											onChange={handleLog}
										/>
									</Fieldset>
								</FlexDiv>
								<FlexDiv>
									<FieldLabel>About</FieldLabel>
									<Cutout style={{ width: '100%', height: '200px' }}>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Reprehenderit commodi sit, iusto quaerat eaque ipsum non
											voluptatum rem expedita obcaecati suscipit. Odit
											inventore laboriosam necessitatibus saepe neque labore
											odio. Dolorem.
										</p>
									</Cutout>
								</FlexDiv>
							</>
						)}
						{activeTab === 3 && (
							<>
								<Table>
									<TableHead>
										<TableRow head>
											<TableHeadCell>Type</TableHeadCell>
											<TableHeadCell>Name</TableHeadCell>
											<TableHeadCell>Age</TableHeadCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableDataCell style={{ textAlign: 'center' }}>
												<span role="img" aria-label="cat">
													🐈
												</span>
											</TableDataCell>
											<TableDataCell>Apollo</TableDataCell>
											<TableDataCell>8</TableDataCell>
										</TableRow>
										<TableRow>
											<TableDataCell style={{ textAlign: 'center' }}>
												<span role="img" aria-label="cat">
													🐈
												</span>
											</TableDataCell>
											<TableDataCell>Percival</TableDataCell>
											<TableDataCell>1</TableDataCell>
										</TableRow>
									</TableBody>
								</Table>
							</>
						)}
					</TabBody>
				</WindowContent>
			</Window>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	.window {
		margin: 1rem;
		width: 100%;

		@media ${screens.md} {
			width: 75%;
		}

		@media ${screens.lg} {
			width: 50%;
		}

		@media ${screens.xl} {
			width: 25%;
		}
	}
`;

const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 1rem;
`;

const FieldLabel = styled.span`
	margin-bottom: 0.5rem;
`;

export default Profile;
