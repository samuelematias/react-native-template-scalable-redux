import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.user.com',
});

export default api;
