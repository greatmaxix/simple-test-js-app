import Helper from './src/services/helper';
import TestAppApiService from './src/services/testAppApi';
import TestState from './src/services/testState';

let apiService = new TestAppApiService();

let helper = new Helper();
apiService.getTests(10, 0).then(({data}) => {
    let parsedData = helper.parseDataToTestClasses(data);;
    let testState = new TestState(parsedData)
    testState.renderTestQuestion();
});
