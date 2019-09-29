import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the standings later it will retrieve
// the logged in user standings
export function getStandings() {
  return Axios.get(`${baseUrl}/standings`)
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
