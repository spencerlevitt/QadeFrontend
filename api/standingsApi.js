import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.prod';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getStandings(game = 'all', csrfToken, userID) {
  if (game === 'all') {
    const games = ['nba', 'fifa', 'madden', 'nhl'];
    return games.map((g) => getStandingsAPICall(g, csrfToken, userID));
  } else {
    return getStandingsAPICall(game, csrfToken, userID);
  } 
}

function getStandingsAPICall(game, csrfToken, userID) {
  return Axios.get(`${baseUrl}${game}?user=${userID}&show=friends`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response, 'game', game))
    .catch(error => handleError(error.response));
}
