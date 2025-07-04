import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://gutendex.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
