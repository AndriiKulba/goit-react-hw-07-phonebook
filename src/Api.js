import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

function fetch() {
  let url = '/contacts';
  return axios.get(url).then(response => console.log(response.data));
}

function fetch2() {
  let url = '/contacts';
  return axios.get(url).then(response => response.data);
}
export default { fetch, fetch2 };
