import axios from 'axios';

const api = axios.create({
    //baseURL: "https://educadorfisico.azurewebsites.net/api"
    baseURL: "http://localhost:3333/api"
});

export default api;