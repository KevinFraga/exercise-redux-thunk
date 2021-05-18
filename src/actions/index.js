export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
const API = 'https://aws.random.cat/meow';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => {
  // Desenvolva aqui o código da action assíncrona
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(API)
    .then((response) => response.json())
    .then(({ file }) => dispatch(getPicture(file)));
  }
}
