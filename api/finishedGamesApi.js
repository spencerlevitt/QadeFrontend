import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getScoreConfirmations(userId, csrfToken) {
  return Axios.get(`${baseUrl}finished_games/?user=${userId}`, {}
  , {
      headers: {
        'X-CSRFToken': csrfToken || ''
      }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function acceptScoreConfirmation (gameId, winnerLocation=null, loserLocation=null, csrfToken) {
  return Axios.patch(`${baseUrl}finished_games/${gameId}/`, {
    status: 1,
    winner_location: winnerLocation ? winnerLocation : undefined,
    loser_location: loserLocation ? loserLocation : undefined
  }
  , {
      headers: {
        'X-CSRFToken': csrfToken || ''
      }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}