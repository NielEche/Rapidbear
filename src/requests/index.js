
import axios from 'axios';
import { useAuthStore } from '../store'

const baseURL = "http://localhost:8000/api/"

export const Requests = {

    makeGetRequest: (request)  => {

        const store = useAuthStore()

        const request_urls = {
           
        }

        if (request.params !== undefined) {
            var obj = request.params
            var params = Object.keys(obj).map((key) => { return key + '=' + obj[key] }).join('&')
            var request_url = baseURL + request_urls[request.what] + "?" + params
        } else {
            request_url = baseURL + request_urls[request.what]
        }

        var config = {}

        if(request.with_token == undefined || request.with_token){
            config = {
                headers: {
                    'Authorization': 'Bearer ' + store.getAccessToken
                }
            }
        }

        console.log('%cSending get request to: ' + '%c' + request_url, 'color:#00ff00;font-size:14px;background:#000;', 'color:#ff0000;font-size:14px;background:#000;')

        return new Promise((resolve, reject) => {
            axios.get(request_url, config)
            .then((response) => {
                    response.what = request.what
                    resolve(response)
                })
                .catch((err) => {
                    err.what = request.what
                    reject(err)
                    
                })
        })
    },










    makePostRequest: (request)  => {

        const store = useAuthStore()

        const request_urls = {
            'createUser': 'register',
            'authenticateUser': 'authenticate',
        }

        if (request.params !== undefined) {
            var obj = request.params
            var params = Object.keys(obj).map((key) => { return key + '=' + obj[key] }).join('&')
            var request_url = baseURL + request_urls[request.what] + "?" + params
        }else{
            request_url = baseURL + request_urls[request.what]
        }

        var data = (request.data !== undefined) ? request.data : {}

        var config = {}

        if(request.with_token == undefined || request.with_token){
            config = {
                headers: {
                    'Authorization': 'Bearer ' + store.getAccessToken
                }
            }
        }

        console.log('%cSending post request to: ' + request_url, 'color:#00ff00;font-size:14px;background:#000;')

        return new Promise((resolve, reject) => {
            axios.post(request_url, data, config)
                .then((response) => {
                    response.what = request.what
                    resolve(response)
                })
                .catch((err) => {
                    err.what = request.what
                    reject(err)
                    
                })
        })
    },







    makePutRequest: (request)  => {

        const store = useAuthStore()

        const request_urls = {
           
        }

        if (request.params !== undefined) {
            var obj = request.params
            var params = Object.keys(obj).map((key) => { return key + '=' + obj[key] }).join('&')
            var request_url = baseURL + request_urls[request.what] + "?" + params
        }else{
            request_url = baseURL + request_urls[request.what]
        }

        var data = (request.data !== undefined) ? request.data : {}

        var config = {}

        if(request.with_token == undefined || request.with_token){
            config = {
                headers: {
                    'Authorization': 'Bearer ' + store.getAccessToken
                }
            }
        }

        console.log('%cSending put request to: ' + request_url, 'color:#00ff00;font-size:14px;background:#000;')

        return new Promise((resolve, reject) => {
            axios.put(request_url, data, config)
                .then((response) => {
                    response.what = request.what
                    resolve(response)
                })
                .catch((err) => {
                    err.what = request.what
                    reject(err)
                    
                })
        })
    }
}

