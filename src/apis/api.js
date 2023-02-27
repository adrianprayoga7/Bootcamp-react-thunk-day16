import axios from "axios";


//menghubungkan ke api
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});