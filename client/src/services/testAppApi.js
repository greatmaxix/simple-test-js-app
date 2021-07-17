import ApiService from "./api";

export default class TestAppApiService extends ApiService {
    constructor() {
        super('http://172.24.53.112:3000');
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
}