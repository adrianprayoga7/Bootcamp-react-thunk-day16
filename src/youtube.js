import axios from 'axios';

//fungsi untuk menggunakan api youtube
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAihAAsV0NVc-23iTk0ipsmCsOW06ALUV0'
    }
})

