import axios from 'axios';

const api = axios.create({
    baseURL: "https://educadorfisico.azurewebsites.net/api"
});

export default api;