import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
} from 'react-native';
import { TextComponentMock } from '~/components';

const App = () => {
	return (
		<SafeAreaView>
			<StatusBar />
			<TextComponentMock />
		</SafeAreaView>
	);
};

export default App;
