import axios from 'axios';
import { get } from 'jquery';

 async function call_api(type, url, request, header) { 
    // await intercept_request();
    switch (type) { 
        case "POST":
            return  await post_request(url, request, header);
        case "GET":
            return  get_request(url);
        default:
            return { 'error': true, "msg": 'Please enter valid url' };
    }
    // await intercept_response();
}

// function intercept_request() {
//     axios.interceptors.request.use(function (config) {
//         console.log('request',config);
//     }, function (error) {
//         console.log(Promise.reject(error));
//     });
// }
 
// function intercept_response() { 
//     axios.interceptors.response.use(function (response) {
//         console.log(response);
//     }, function (error) {
//         console.log(Promise.reject(error));
//     });
// }

function post_request(url, request, header) {
    axios.post(process.env.REACT_APP_BASE_URL + url, request)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
        return error;
    });
}

async function  get_request(url) {
    await axios.get(process.env.REACT_APP_BASE_URL + url)
        .then(function (response) {
            console.log(response.data, 'response');
            return response.data;
        })
        .catch(function (error) {
        return error;
    });
}

export  { call_api }