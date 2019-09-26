import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the users from mockAPI.io
//later it will retrieve  the logged in users details
export function getUserWithBalance() {
  return fetch(`${baseUrl}/users`)
    .then(handleResponse)
    .catch(handleError);
}
