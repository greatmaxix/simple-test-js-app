import Test from "../models/Test";

export default class Helper {
    constructor() {
    }

    parseDataToTestClasses(data) {
        let parsedData = [];
        for (let i = 0; i < data.length; i++) {
            const currItem = data[i];
            parsedData.push(new Test(currItem.question, currItem.id, currItem.sound_path, currItem.image_path, currItem.answers_json, currItem.is_multiple));
        }
        return parsedData;
    }
}