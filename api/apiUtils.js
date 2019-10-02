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
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// Later this would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.log('Error (APIUtil): ', error);
  
  // Return the forbidden error to the action
  // so a request to get a CSRF token can be made
  if (error.status === HttpStatus.FORBIDDEN) {
    return error;
  } else if (error.status === HttpStatus.BAD_REQUEST) {
    throw (new Error('Incorrect email and password entered!'));
  } else {
    throw error.data.detail;
  }
}
