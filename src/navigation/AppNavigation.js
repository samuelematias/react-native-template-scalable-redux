import { createAppContainer, createStackNavigator } from 'react-navigation';

import UserScreen from '~/user/view/screens/UserScreen';

const UserStack = createStackNavigator(
	{
		UserScreen: { screen: UserScreen },
	},
	{
		headerMode: 'none',
		initialRouteName: 'UserScreen',
	},
);

const Navigation = createStackNavigator(
	{
		UserStack: { screen: UserStack },
	},
	{
		headerMode: 'none',
		initialRouteName: 'UserStack',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	},
);

export default createAppContainer(Navigation);
