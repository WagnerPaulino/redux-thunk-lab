import { FETCH_QUESTIONARIO_DATA } from '../actions/types';

export default function githubReducer(state = [], action) {
  console.log('gitReducers action ',action)
  console.log('gitReducers state ',state)
  switch (action.type) {
      case FETCH_QUESTIONARIO_DATA:
      return action.data;
    default:
      return state;
  }
}
