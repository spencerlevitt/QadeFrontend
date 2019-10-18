import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function submitDispute(csrfToken, payload) {
  return Axios.post(`${baseUrl}disputes/`, payload, {
      headers: {
        'X-CSRFToken': csrfToken || ''
      }
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}