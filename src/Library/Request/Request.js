import axios from 'axios';

class Request {
  constructor (url) {
    this.AxiosClient = axios.create({
      baseURL: url,
      timeout: 5000
    });
  }
  getSession (url, data) {
    return this.AxiosClient.post(url, data);
  }
}

export default Request;
