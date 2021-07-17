import axios from "axios";
import 'regenerator-runtime/runtime';


export default class ApiService {
    constructor(url) {
        this.axios = axios;
        this.axios.defaults.baseURL = url;
    }
}