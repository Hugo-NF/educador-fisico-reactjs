import axios from 'axios';

const api = axios.create({
  baseURL: 'https://educadorfisico.azurewebsites.net/api',
  // baseURL: 'http://localhost:3333/api',
  timeout: 20000, // 20s timeout connection
});

export default api;
