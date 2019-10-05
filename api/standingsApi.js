import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getStandings(game = 'all', csrfToken) {
  if (game === 'all') {
    const games = ['nba', 'fifa', 'madden', 'nhl'];
    return games.map((g) => getStandingsAPICall(g, csrfToken));
  } else {
    return getStandingsAPICall(game, csrfToken);
  } 
}

function getStandingsAPICall(game, csrfToken) {
  return Axios.get(`${baseUrl}${game}/`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response, 'game', game))
    .catch(error => handleError(error.response));
}
