import { SOME_ACTION } from './actions';

function reducer(
  state = {
    someState: false
  },
  action
) {
  switch (action.type) {
    case SOME_ACTION:
      return {
        ...state,
        someState: true
      };
    default:
      return state;
  }
}

export default reducer;
