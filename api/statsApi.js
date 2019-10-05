import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.dev';
import Axios from "axios";
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the stats later it will retrieve
// the logged in user stats
export function getStats() {
  return Axios.get(`${baseUrl}/user_stats`)
    .then(handleResponse)
    .catch(error => handleError(error.response));
}