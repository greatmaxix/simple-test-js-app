import baseTestState from "./baseTestState";

export default class TestFinishedState extends baseTestState {
    constructor(testList, userAnswers) {
        super();
        this.testList = testList;
        this.userAnswers = userAnswers;
    }

    renderResultPage() {
        this.getCorrectAnswers().then(({data}) => {
            this.correctAnswers = data.result;
            let container = document.getElementById('flex_container');
            let resultTable = document.createElement('table');
            resultTable.classList.add('table', 'table-hover');
            let tableHeader = document.createElement('thead');
            tableHeader.innerHTML = `
                <tr>
                  <th scope="col" style="width:40%">Вопрос</th>
                  <th scope="col" style="width:40%">Варианты ответов</th>
                  <th scope="col" style="width:20%">Результат</th>
                </tr>
            `;
            resultTable.appendChild(tableHeader);
            let tableBody = document.createElement('tbody');
            for (let i = 0; i < this.testList.length; i++) {
                const currentTest = this.testList[i];
                let tr = this.renderVariants(currentTest);
                tableBody.appendChild(tr)
            }
            resultTable.appendChild(tableBody);
            container.appendChild(resultTable);
        });
    }

    renderVariants(currentTest) {
        const answersKeys = Object.keys(currentTest.answers_json);
        let tr = document.createElement('tr');
        let currQuestionItem = document.createElement('td');
        currQuestionItem.innerText = currentTest.question;
        let answersItemContainer = document.createElement('td');
        let ul = document.createElement('ul');
        ul.classList.add('list-group');
        answersItemContainer.appendChild(ul);
        const userAnsweredCorrectly = this.didUserAnswerCorrectly(currentTest.id);
        const userAnswer = this.getUserAnswerByTestId(currentTest.id);
        const correctAnswerForCurrentTest = this.getCorrectAnswerByTestId(currentTest.id);
        for (let j = 1; j <= answersKeys.length; j++) {
            const variantElement = currentTest.answers_json[j];
            let listItem = document.createElement('li');
            this.setListItemBgClass(listItem, j, userAnswer, correctAnswerForCurrentTest, userAnsweredCorrectly);
            listItem.innerText = variantElement.answer_text;
            ul.appendChild(listItem);
        }
        let pointItem = document.createElement('td');
        pointItem.innerText = userAnsweredCorrectly ? 1 : 0;
        tr.appendChild(currQuestionItem);
        tr.appendChild(answersItemContainer);
        tr.appendChild(pointItem);

        return tr;
    }

    setListItemBgClass(element, answerKey, userAnswer, correctAnswerForCurrentTest, userAnsweredCorrectly) {
        element.classList.add('list-group-item');
        //if user selected current answer
        if (userAnswer && answerKey === userAnswer.answerKey) {
            //if user selected correct answer
            if (userAnsweredCorrectly && userAnswer.answerKey === answerKey) {
                element.classList.add('bg-success');
                return true;
            }
            //if user selected wrong answer
            else {
                element.classList.add('bg-danger');
            }
        }
        else if (userAnswer && correctAnswerForCurrentTest && correctAnswerForCurrentTest.right_answer_keys.includes(answerKey.toString())) {
            //highlight correct answer
            element.classList.add('bg-success');
        }

        return false;
    }

    getUserAnswerByTestId(testId) {
        return this.userAnswers.find(el => el.questionId === testId);
    }

    getCorrectAnswerByTestId(testId) {
        return this.correctAnswers.find(el => el.id === testId);
    }

    didUserAnswerCorrectly(testId) {
        const userAnswer = this.getUserAnswerByTestId(testId);
        const correctAnswerForCurrentTest = this.getCorrectAnswerByTestId(testId);
        return correctAnswerForCurrentTest && userAnswer && correctAnswerForCurrentTest.right_answer_keys.includes(userAnswer.answerKey.toString());
    }


    async getCorrectAnswers() {
        let questionIds = this.testList.map(el => el.id);
        return this.apiService.getAllAnswersByQuestionIds(questionIds);
    }
}