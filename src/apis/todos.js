import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
})