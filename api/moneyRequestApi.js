import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = 'http://qade.us-east-2.elasticbeanstalk.com/v1/';//environment.API_URL;

export function submitMoneyRequest(csrfToken, payload) {
  console.log('***** ====>');
  console.log(`${baseUrl}money_request/`);
  return Axios.post(`${baseUrl}money_request/`, payload, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}