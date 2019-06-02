import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'


    // for offline 
    // baseURL: 'http://localhost:3000'
})