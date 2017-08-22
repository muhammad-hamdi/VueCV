import axios from 'axios'
import config from './config'

var api = axios.create({
	baseURL: config.url,
	headers: {'Authorization': localStorage.getItem('token')}
});

window.api = api;