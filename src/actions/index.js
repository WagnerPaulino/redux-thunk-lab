import { FETCH_QUESTIONARIO_DATA } from './types';

const apiUrl = 'https://question-for-study-service.herokuapp.com/api/questionarios/';

export const fetchData = (data) => {
  return {
    type: FETCH_QUESTIONARIO_DATA,
    data
  }
};

export const fetchQuestionarioData = () => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then(response => {
        response.json().then((data) => {
          dispatch(fetchData(data))
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};
