import baseTestState from "./baseTestState";
import TestState from "./testState";

export default class mainPageState extends baseTestState {
    constructor(limit = 10, offset = 0) {
        super();
        this.limit = limit;
        this.offset = offset;
    }

    startTests() {
        this.apiService.getTests(this.limit, this.offset).then(({data}) => {
            let parsedData = this.helper.parseDataToTestClasses(data);;
            let testState = new TestState(parsedData)
            testState.renderTestQuestion();
        });
    }
}