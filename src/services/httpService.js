import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    console.log("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function setToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken
};

export default http;
