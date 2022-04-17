import axios from 'axios';

const apicards = axios.create({
  baseURL: 'http://localhost:3333/api/'
});

export default apicards;
