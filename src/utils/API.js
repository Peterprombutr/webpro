import axios from 'axios'

axios.defaults.baseURL = 'https://typeit-backend.et.r.appspot.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class API {

    static async getWordBank(n) {
        var promise = axios.get("/api/wordbank", { params: { wb_name:"common200", num:n }});
        var dataPromise = promise.then(response => response.data)

        return dataPromise;
    }

    static async getMonster(id) {
        var promise = axios.get("/api/monster", { params: { m_id:id }});
        var dataPromise = promise.then(response => response.data)

        return dataPromise;
    }

}