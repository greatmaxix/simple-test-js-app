import ApiService from "./api";

export default class TestAppApiService extends ApiService {
    constructor() {
        super('http://localhost:3000');
    }

    async getTests(limit = 10, offset = 0) {
        return await this.axios.get('/tests', {
            params: {
                limit,
                offset
            }
        }) 
    }

    async checkAnswer(questionId, answerKey) {
        return await this.axios.post(`/check-answer/${questionId}`, {
            data: {
                answer_keys: Array.isArray(answerKey) ? answerKey : [answerKey]
            }
        });
    }

    async getAllAnswersByQuestionIds(questionIds) {
        return await this.axios.post(`/get-answers-by-q-ids`, {
            data: {
                question_ids: questionIds
            }
        });
    }
}