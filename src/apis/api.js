export default class Api{
    constructor() {
        this.baseUrl = 'http://localhost:3000/'; // TODO get from config
    }
    makeURL(urlKey) {
        return this.baseUrl + urlKey;
    }
    async get(urlKey) {
        const url = this.makeURL(urlKey);
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        const token = localStorage.getItem('authToken');
        if (token) options.headers['x-auth'] = token;
        return await (await fetch(url, options)).json();
    }
    async post(urlKey, data) {
        const url = this.makeURL(urlKey);
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const token = localStorage.getItem('authToken');
        if (token) options.headers['x-auth'] = token;
        return await (await fetch(url, options)).json();
    }
}