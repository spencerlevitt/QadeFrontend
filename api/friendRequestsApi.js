import { handleResponse, handleError } from './apiUtils';
import { environment } from '../environments/environment.prod';
import Axios from 'axios';
const baseUrl = environment.API_URL;

export function getFriendRequests(userId, csrfToken) {
  console.log(userId)
  console.log('****');
  console.log(csrfToken);
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
  console.log('ooooo');
  console.log(user_id);
  console.log(eventual_friend_id);
  console.log(csrfToken);
  console.log(`${baseUrl}friend_requests/`);
  console.log('oooooo');
   //  let data = new FormData(); // creates a new FormData object
   //  data.append('user_id',user_id);
   //  data.append('eventual_friend_id', eventual_friend_id);
  return Axios.post(`${baseUrl}friend_requests/`,
  {
     user_id,
     eventual_friend_id
  }
   , {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}
