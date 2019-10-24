import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.prod';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getFriendRequests(userId, csrfToken) {
  return Axios.get(`${baseUrl}friend_requests/?eventual_friend=${userId}`, {}, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function updateFriendRequests(requestId, status, csrfToken) {
  return Axios.patch(`${baseUrl}friend_requests/${requestId}/`, { status }, {
    headers: csrfToken ? { "X-CSRFToken": csrfToken } : {},
  })
    .then(response => handleResponse(response))
    .catch(error => handleError(error.response));
}

export function createFriendRequest(user_id, eventual_friend_id, csrfToken) {
  return Axios.post(`${baseUrl}friend_requests/`, {
    user_id, eventual_friend_id
  }, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
