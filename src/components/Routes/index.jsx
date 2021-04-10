import { Route, Switch } from 'react-router';

import Home from '../Home';
import Profile from '../Profile';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
            <Route exact path="/profile">
				<Profile />
			</Route>
		</Switch>
	);
};

export default Routes;
