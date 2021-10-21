import React, { useState } from 'react';
import {
	Button,
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

const App = () => {
	let list = [];

	for (let index = 0; index < 40; index++) {
		list.push({
			name: `Item ${index}`,
			id: `id-${index}`
		});
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				numColumns={2}
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Text style={styles.listItem}>name: {item.name}</Text>
				)}
			/>
			{/* <ScrollView>
				{list.map((i, index) => (
					<View key={`item-${index}`} style={styles.listItem}>
						<Text>name: {i.name}</Text>
						<Text>Age: {i.age}</Text>
					</View>
				))}
			</ScrollView> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ced1ce',
		padding: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
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
