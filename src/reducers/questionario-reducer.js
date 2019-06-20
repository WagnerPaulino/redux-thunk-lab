import { FETCH_QUESTIONARIO_DATA, FETCH_ONE_QUESTIONARIO_DATA } from '../actions/types';

export default function questionarioReducer(state = [], action) {
  switch (action.type) {
      case FETCH_QUESTIONARIO_DATA:
      return action.data;
      case FETCH_ONE_QUESTIONARIO_DATA:
        return action.data
    default:
      return state;
  }
}
