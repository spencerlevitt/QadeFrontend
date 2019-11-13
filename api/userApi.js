import { handleResponse, handleError } from "./apiUtils";
import { environment } from '../environments/environment.prod';
import Axios from "axios";
const baseUrl = environment.API_URL;

// TODO: for now this function will
// get all the users from mockAPI.io
//later it will retrieve  the logged in users details
export function getUserDetails(csrfToken) {
  return Axios.get(`${baseUrl}users/?show=me`, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function signup(signupData, csrfToken) {
  return Axios.post(`${baseUrl}users/`, {
    ...signupData
  }, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch(error => handleError(error.response));
}

export function updateProfile(profileId, profileData, csrfToken) {
  return Axios.patch(`${baseUrl}user_profile/${profileId}/`, profileData, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
    .then(handleResponse)
    .catch((error) =>{
       //console.log(error.response);
       return handleError(error.response)
    });
}

export function searchGamers(key, csrfToken) {
  return Axios.get(`${baseUrl}users/?search=${key}`, {
    headers: csrfToken ? {"X-CSRFToken": csrfToken} : {},
  })
  .then(handleResponse)
  .catch(error => handleError(error.response))
}
