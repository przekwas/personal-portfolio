import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../utils/global-styles';
import styled, { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import Navbar from '../Navbar';
import Routes from '../Routes';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<Navbar />
				<Container>
					<Routes />
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	);
};

const Container = styled.main`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
`;

export default App;
