import Helper from './src/services/helper';
import mainPageState from './src/services/mainPageState';
import TestAppApiService from './src/services/testAppApi';
import TestState from './src/services/testState';

let pageState = new mainPageState();
pageState.startTests();