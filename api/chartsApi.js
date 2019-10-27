import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.prod';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getChartData(userId, period, csrfToken) {
  return Axios.get(`${baseUrl}charts_data/?user=${userId}&period=${period}`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}
