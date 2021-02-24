import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from '../actions/index';

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return async (dispatch) => {
    try {
      dispatch(requestDog());
      const dogResponse = await fetch(
        'https://dog.ceo/api/breeds/image/random'
      );
      const dogJson = await dogResponse.json();
      return dispatch(getImage(dogJson));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
