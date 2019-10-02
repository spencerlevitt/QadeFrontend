import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
import Axios from "axios";
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the users from mockAPI.io
//later it will retrieve  the logged in users details
export function getUserDetails(csrfToken) {
  return Axios.get(`${baseUrl}users/?show=me`, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function signup(signupData, csrfToken) {
  return Axios.post(`${baseUrl}users/`, {
    ...signupData
  }, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
