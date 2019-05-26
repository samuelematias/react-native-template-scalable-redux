import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store/CreateStore';

import AppNavigation from '~/navigation/AppNavigation';

const App = () => (
	<Provider store={store}>
		<AppNavigation />
	</Provider>
);

export default App;
