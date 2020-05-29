import axios from 'axios';

const port = 8080;

export default axios.create({
  baseURL: `http://localhost:${port}/api/v1`
});
