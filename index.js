/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootNavigatorForum from './src/features/app/RootNavigatorForum';
import RootNavigatorIssues from './src/features/app/RootNavigatorIssues'

AppRegistry.registerComponent(appName, () => App);
