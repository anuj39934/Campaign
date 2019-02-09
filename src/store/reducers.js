import { SHOWPOPUP} from './actions';

export function showPopup(state = [], action) {
  switch (action.type) {
    case SHOWPOPUP:
      return [...state, action.popState];
    default:
      return state;
  }
}
