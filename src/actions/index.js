import { FETCH_GITHUB_DATA } from './types';

const apiUrl = 'https://question-for-study-service.herokuapp.com/api/questionarios/5';

export const fetchData = (data) => {
  return {
    type: FETCH_GITHUB_DATA,
    data
  }
};

export const fetchGithubData = () => {
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
