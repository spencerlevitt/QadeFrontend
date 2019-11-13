import HttpStatus from 'http-status-codes';

// Parse server-side validation errors
// Server side validation returns a string error message as text
export async function handleResponse(response, responseCategory = null, categoryValue = null) {
  if (response.status === HttpStatus.OK
    || response.status === HttpStatus.CREATED
    || response.status === HttpStatus.FORBIDDEN
  ) {
    if(responseCategory && categoryValue) {
      response[responseCategory] = categoryValue;
    }
    return response;
  } else if (response.status === HttpStatus.BAD_REQUEST) {
    throw new Error(response);
  }
  throw new Error("Network response was not ok.");
}

// Later this would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.log('Error (APIUtil): ', error);

  // If error is undefined the backend service is most
  // likely offline and needs to be re-booted / troubleshooted
  if (typeof error === 'undefined') {
    throw(new Error('Ooops! Something went wrong. Please try again after some minutes.'))
  }
  
  // Return the forbidden error to the action
  // so a request to get a CSRF token can be made
  if (error.status === HttpStatus.FORBIDDEN) {
    return error;
  } else if (error.status !== HttpStatus.OK) {
    if (error.data.detail && !error.data.detail.indexOf('CSRF') > -1) {
      throw new Error(error.data.detail);
    } else if (error.data.non_field_errors) {
      throw new Error(error.data.non_field_errors);
    } else if (error.data.error) {
      throw new Error(error.data.error);
    }
  } else {
    throw new Error(error.data.toString());
  }
}
