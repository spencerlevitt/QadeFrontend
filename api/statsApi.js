import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the stats later it will retrieve
// the logged in user stats
export function getStats() {
  return fetch(`${baseUrl}/stats`)
    .then(handleResponse)
    .catch(handleError);
}