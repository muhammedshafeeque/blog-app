import axios from 'axios';
import { baseURL } from '../Constants/constants';

const api = axios.create({
  baseURL:baseURL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
