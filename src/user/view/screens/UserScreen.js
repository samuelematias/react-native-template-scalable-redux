import React from 'react';

import {
	Text,
	Image,
	StyleSheet,
	Dimensions,
	View,
	StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#2EA6FF',
	},
	fileName: {
		fontWeight: 'bold',
		marginTop: 5,
	},
	instructions: {
		color: '#DDD',
		fontSize: 14,
		marginTop: 20,
		textAlign: 'center',
	},
	logo: {
		height: Dimensions.get('window').height * 0.33,
		marginVertical: Dimensions.get('window').height * 0.11,
		width: Dimensions.get('window').height * 0.33 * (1950 / 662),
	},
	welcome: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

const UserScreen = () => (
	<View style={styles.container}>
		<StatusBar barStyle="light-content" backgroundColor="#2EA6FF" />
		<Image
			source={{
				uri: 'https://i.imgur.com/bMKk41d.png',
			}}
			style={styles.logo}
			resizeMode="contain"
		/>
		<Text style={styles.welcome}>Bem-vindo ao Template Redux!</Text>
		<Text style={styles.instructions}>
			Essa é a tela principal da sua aplicação ;D
		</Text>
		<Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
		<Text style={[styles.instructions, styles.fileName]}>
			src/user/view/screens/UserScreen.js
		</Text>
	</View>
);

export default UserScreen;
