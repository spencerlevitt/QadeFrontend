import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
const baseUrl = environment.API_URL;
const responseFormat = environment.API_RESPONSE_FORMAT;

// TODO: for now this function will
// get all the users from mockAPI.io
//later it will retrieve  the logged in users details
export function getUserWithBalance() {
  return fetch(`${baseUrl}users/1/`)
    .then(handleResponse)
    .catch(handleError);
}
