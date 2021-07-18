import TestAppApiService from "./testAppApi";

export default class TestState {
    constructor(testList) {
        this.testList = testList;
        this.currentTestIndex = 0;
        this.renderTestForm();
        this.apiService = new TestAppApiService();
    }

    get currentTest() {
        return this.testList[this.currentTestIndex];
    }

    get currrentTestIndex() {
        return this.currentTestIndex;
    }

    get testLength() {
        return this.testList.length;
    }

    goToNextTest() {
        this.currentTestIndex++;
        this.clearAll();
        this.renderTestForm();
        this.renderTestQuestion();
    }

    getProgressPercentage() {
        if (this.testList.length > 0) {
            return (this.currentTestIndex / this.testList.length) * 100;
        }
        else {
            return 0;
        }
    }

    checkAnswer(answerKey) {
        this.apiService.checkAnswer(this.currentTest.id, answerKey).then(({data}) => {
            const success = data.success;
            let answerVariantButton = document.getElementById(`answer-button-${answerKey}`);
            if (success) {
                answerVariantButton.classList.remove('btn-info');
                answerVariantButton.classList.add('btn-success');
            }
            else {
                answerVariantButton.classList.remove('btn-info');
                answerVariantButton.classList.add('btn-danger');
            }
            this.disableButtonsClick();
            this.handleAnswerChecked(success);
            this.createGoToNextQuestionButton();
        });
    }

    disableButtonsClick() {
        document.getElementsByName('answer-button').forEach(el => {
            el.disabled = true;
            el.classList.add('disabled');
            el.removeEventListener('click', () => {})
        })
    }

    clearAll() {
        document.getElementById('flex_container').innerHTML = '';
    }

    createGoToNextQuestionButton() {
        let goToNextQuestionButton = document.createElement('button');
        goToNextQuestionButton.classList.add('btn', 'btn-lg', 'btn-success', 'text-center', 'go-to-next-question-button', 'mb-4');
        goToNextQuestionButton.innerText = 'Далее';
        goToNextQuestionButton.addEventListener('click', () => {
            this.goToNextTest();
        })
        document.getElementById('test_container').appendChild(goToNextQuestionButton);
    }

    handleAnswerChecked(success) {
        let notificationImageContainer = document.createElement('div');
        let message = 'Хорош!';
        notificationImageContainer.classList.add('notification-image-container');
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('notification-message');

        let messageImg = document.createElement('img');
        messageDiv.appendChild(messageImg);
        let messageText = document.createElement('h5');
        messageText.classList.add('text-center');
        messageDiv.appendChild(messageText);

        let imageDiv = document.createElement('div');
        imageDiv.classList.add('notification-image');
        notificationImageContainer.appendChild(messageDiv);
        notificationImageContainer.appendChild(imageDiv);
        if (success) {
            imageDiv.classList.add('success');
        }
        else {
            imageDiv.classList.add('error');
            message = "Попробуй еще раз!";
        }
        messageText.innerText = message;
        document.getElementById('test_container').appendChild(notificationImageContainer);
    }

    renderTestForm() {
        let container = document.getElementById('flex_container');
        let testContainer = document.createElement('div');
        testContainer.id = 'test_container';
        testContainer.style.height = '100vh';
        testContainer.style.width = '100vw';
        testContainer.classList.add('border', 'border-3', 'border-rounded')
        container.appendChild(testContainer);

        this.renderTestQuestionContainer();
    }

    renderTestQuestionContainer() {
        let testContainer = document.getElementById('test_container');
        let questionTextContainer = document.createElement('div');
        questionTextContainer.id = 'question_text_container';
        questionTextContainer.classList.add('d-flex', 'flex-column', 'justify-content-center');
        testContainer.appendChild(questionTextContainer);

        let questionHeader = document.createElement('h4');
        questionHeader.id = 'question_text_header';
        questionHeader.classList.add('m-auto', 'pb-4');
        questionHeader.innerText = 'Выберите правильный ответ';
        questionTextContainer.appendChild(questionHeader);

        let questionProgressBarContainer = document.createElement('div');
        questionProgressBarContainer.id = 'question_text_progress_bar_container';
        questionProgressBarContainer.classList.add('progress', 'mx-3');
        questionTextContainer.appendChild(questionProgressBarContainer);

        let questionProgressBar = document.createElement('div');
        questionProgressBar.id = 'question_text_progress_bar';
        questionProgressBar.classList.add('progress-bar');
        questionProgressBar.style.width = this.getProgressPercentage() + '%';
        questionProgressBar.setAttribute('role', 'progressbar')
        questionProgressBar.setAttribute('aria-valuenow', this.currentTestIndex);
        questionProgressBar.setAttribute('aria-valuemin', 0);
        questionProgressBar.setAttribute('aria-valuemax', this.testList.length);
        questionProgressBarContainer.appendChild(questionProgressBar);

        let questionTextItem = document.createElement('h5');
        questionTextItem.id = 'question_text_item';
        questionTextItem.classList.add('m-auto', 'pt-2');
        questionTextContainer.appendChild(questionTextItem);
    }

    renderTestQuestion() {
        let questionTextItem = document.getElementById('question_text_item');
        questionTextItem.innerText = this.currentTest.question;
        this.renderTestVariants(this.currentTest.answers_json);
    }

    renderTestVariants(answers) {
        let answersKeys = Object.keys(answers);
        let answerContainer = document.createElement('div');
        answerContainer.classList.add('d-flex', 'flex-column', 'mt-5');
        answerContainer.id = 'answer_container';

        for (let i = 1; i <= answersKeys.length; i++) {
            const currAnswer = answers[i];
            let currAnswerElement = document.createElement('button');
            currAnswerElement.id = `answer-button-${i}`;
            currAnswerElement.name = 'answer-button';
            currAnswerElement.classList.add('btn', 'btn-info', 'text-center', 'w-25', 'ml-3', 'my-1')
            currAnswerElement.innerText = currAnswer.answer_text;
            currAnswerElement.addEventListener('click', () => {
                this.checkAnswer(i);
            });
            answerContainer.appendChild(currAnswerElement);
        }

        document.getElementById('question_text_container').appendChild(answerContainer);
    }
}