import axios from 'axios'
import config from './config'

export const api = axios.create({
    baseURL: `${config.url}/api`,
    headers: {
        'x-access-token': localStorage.token
    }
});