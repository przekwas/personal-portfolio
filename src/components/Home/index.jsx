import styled from 'styled-components';
import { screens } from '../../utils/styled-breakpoints';
import { WindowHeader, Window, WindowContent, Fieldset } from 'react95';

const IntroFieldset = () => {
	return (
		<Wrapper>
			<Window className="window">
				<WindowHeader>
					<span>profile.txt</span>
				</WindowHeader>
				<WindowContent>
					<Fieldset label="Name">Luke Przekwas</Fieldset>
					<br />
					<Fieldset label="Role">Instructor and Full Stack Developer</Fieldset>
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

export default IntroFieldset;
