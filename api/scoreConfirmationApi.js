import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.test';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getScoreConfirmations(userId, csrfToken) {
  return Axios.get(`${baseUrl}finished_games/?winner=${userId}&loser=${userId}&status=0`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}
