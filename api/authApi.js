import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
import Axios from "axios";
const baseUrl = environment.API_AUTH_URL;

export function login(username, password, csrfToken='') {
  return Axios.post(`${baseUrl}auth/login/`, {
      username,
      password
    },{
      headers: {"X-CSRFToken": csrfToken},
    })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function logout() {
  return Axios.post(`${baseUrl}auth/logout/`, {}, {
      headers: {"X-CSRFToken": csrfToken},
    })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function getToken(username, password) {
  return Axios.post(`${baseUrl}auth/obtain_token/`, {
      username,
      password
    },{
        headers: {"X-CSRFToken": csrfToken},
    })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
