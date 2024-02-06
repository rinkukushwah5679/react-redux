/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import {name as appName} from './app.json';
import store from './src/components/services/store';

const AppRedux = () => (
	<>
	<Provider store={store}>
		<App />
	</Provider>
	</>
)

AppRegistry.registerComponent(appName, () => AppRedux);
