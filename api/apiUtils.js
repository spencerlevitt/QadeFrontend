import HttpStatus from 'http-status-codes';

// Parse server-side validation errors
// Server side validation returns a string error message as text
export async function handleResponse(response) {
  if (response.status === HttpStatus.OK
    || response.status === HttpStatus.CREATED
  ) {
    return response;
  }
  if (response.status === HttpStatus.BAD_REQUEST) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// Later this would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  // console.error("API call failed. " + error);
  console.log('Error (APIUtil): ', error);
  if (error.status === HttpStatus.FORBIDDEN) {
    throw(new Error('403 Forbidden'));
  } else if (error.status === HttpStatus.BAD_REQUEST) {
    throw(new Error('Incorrect email and password entered!'));
  } else {
    throw error.data.detail;
  }
}
