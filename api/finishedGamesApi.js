import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getScoreConfirmations(userId, csrfToken) {
  return Axios.get(`${baseUrl}finished_games/?user=${userId}&status=0`, {}
  , {
      headers: {
        'X-CSRFToken': csrfToken || ''
      }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function acceptScoreConfirmation (gameId, payload, csrfToken) {
  return Axios.patch(`${baseUrl}finished_games/${gameId}/`, payload
  , {
      headers: {
        'X-CSRFToken': csrfToken || ''
      }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}