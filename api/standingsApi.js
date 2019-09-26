import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the standings later it will retrieve
// the logged in user standings
export function getStandings() {
  return fetch(`${baseUrl}/standings`)
    .then(handleResponse)
    .catch(handleError);
}
