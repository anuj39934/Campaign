import { SHOWPOPUP } from "./actions";

export function showPopup(appState, popState) {
  return {
    type: SHOWPOPUP,
    popState
  };
}
