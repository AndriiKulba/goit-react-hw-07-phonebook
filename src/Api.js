import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

function fetch() {
  let url = `/contacts`;
  return axios.get(url).then(response => console.log(response));
}
export default { fetch };
