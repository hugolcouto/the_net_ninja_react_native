import React, { useState } from 'react';
import {
	Button,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

const App = () => {
	const [name, setName] = useState();

	const buttonHandler = () => {

	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title} >Digite seu nome</Text>
			<Text style={styles.title} >{name}</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Digite seu nome"
				onChangeText={value => setName(value)}
				value={name}
				keyboardType="email-address"
			/>
			<View>
				<Button title='Click me' color="#00b894" onPress={buttonHandler} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ced1ce'
	},
	title: {
		fontSize: 50,
		marginBottom: 20,
	},
	textInput: {
		borderBottomWidth: 1,
		borderBottomColor: '#00b894',
		marginBottom: 20,
		paddingBottom: 0,
		width: '90%'
	}
})

export default App;
