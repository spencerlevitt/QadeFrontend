import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.dev';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getPendingGameRequests(csrfToken) {
  return Axios.get(`${baseUrl}game_requests/?status=0&is_active=true`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function submitGameRequest(csrfToken, payload) {
  return Axios.post(`${baseUrl}game_requests/`, payload, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function acceptGameRequest(requestId, location, csrfToken) {
  return Axios.patch(`${baseUrl}game_requests/${requestId}/`, {
    status: 2,
    receiver_location: '40.7538356,-73.9812916',
  }, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function rejectGameRequest(requestId, csrfToken) {
  return Axios.patch(`${baseUrl}game_requests/${requestId}/`, {
    status: 3
  }, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function senderCancelGameRequest(requestId, csrfToken) {
  return Axios.patch(`${baseUrl}game_requests/${requestId}/`, {
    status: 1,
  }, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function receiverCancelGameRequest(requestId, csrfToken) {
  return Axios.patch(`${baseUrl}game_requests/${requestId}/`, {
    status: 4,
  }, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function getAcceptedGameRequests(csrfToken) {
  return Axios.get(`${baseUrl}game_requests/?status=2&is_active=true`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}
