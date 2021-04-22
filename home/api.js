import axios from 'axios';
class API {
    constructor() {
        this.url = "http://192.168.1.18:8000/";
        this.token=localStorage.getItem('Token');
    }
    getBanner() {
        return axios.get(`${this.url}master/banner`);
    }
    getCategory(id) {
        return axios.get(`${this.url}master/category`);
    }
   
}
export default API;
