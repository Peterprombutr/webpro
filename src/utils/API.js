import axios from 'axios'

axios.defaults.baseURL = 'https://typeit-backend.et.r.appspot.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class API {

    static async getWordBank() {
        axios.get("/api/wordbank", { params: { wb_name:"common200", num:20 }})
        .then(response => {console.log("response: ", response)})
        .catch(err => {
            console.error(err);
        })
    }

    static async getMonster() {
        axios.get("/api/monster", { params: { m_id:1 }})
        .then(response => {console.log("response: ", response)})
        .catch(err => {
            console.error(err);
        })
    }

}