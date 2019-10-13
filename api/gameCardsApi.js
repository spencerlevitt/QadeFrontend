import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function submitGameCard(gameCard, csrfToken, payload) {
  const gameCardUrl = environment.GAME_CARD_URL[gameCard];
  return Axios.post(`${baseUrl}${gameCardUrl}_game_card/`, payload
  , {
    headers: {
      'X-CSRFToken': csrfToken || '',
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}