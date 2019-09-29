import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
import Axios from "axios";
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the users from mockAPI.io
//later it will retrieve  the logged in users details
export function getUserDetails() {
  return Axios.get(`${baseUrl}users/1/`)
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
