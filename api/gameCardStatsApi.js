import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.prod';
import Axios from "axios";
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the stats later it will retrieve
// the logged in user stats
export function getStatsWithOpponent(userId, gameCard, csrfToken) {
console.log(`${baseUrl}${gameCard}/${userId}/`);
  return Axios.get(`${baseUrl}${gameCard}/${userId}/`, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function getStatsForOpponent(userId, opponentId, gameCard, csrfToken) {
   console.log('*****');
   console.log(`${baseUrl}${gameCard}?user=${userId}/&opponent=${opponentId}`);
  return Axios.get(`${baseUrl}${gameCard}?user=${userId}&opponent=${opponentId}`, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
