import React, { useEffect, useState } from 'react';
import {
	Button,
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const App = () => {
	const [list, setList] = useState([])

	useEffect(() => {
		let nList = []
		for (let index = 0; index < 40; index++) {
			nList.push({
				name: `Item novo ${index}`,
				id: `id-${index}`
			});
		}
		setList(nList)
	}, [])

	const pressHandler = id => {
		setList(list.filter(item => item.id !== id));
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				numColumns={2}
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => pressHandler(item.id)}
						style={styles.listItem}
					>
						<Text>name: {item.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ced1ce',
		padding: 20,
	},
	listItem: {
		backgroundColor: "#00b894",
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginBottom: 10,
		marginRight: 10,
		fontSize: 20,
		width: '50%',
	}
})

export default App;
