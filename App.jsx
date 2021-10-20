import React from 'react';
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { TextComponentMock } from './src/components'

const App = () => {
	return (
		<SafeAreaView>
			<StatusBar />
			<TextComponentMock />
		</SafeAreaView>
	);
};

export default App;
