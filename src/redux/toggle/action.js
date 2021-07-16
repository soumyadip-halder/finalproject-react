import { FETCH_BUTTON_CLICK, TOGGLE_INIT } from "./constants";

/*
This component houses the actions needed to help with the toggling feature implemented in the pages where 
movie thumbnails and provided
*/

export const toggleUp = (itemLen, index) => {
  return {
    type: FETCH_BUTTON_CLICK,
    payload: { itemLen, index },
  };
};

export const toggleInit = (toggleStates) => {
  return {
    type: TOGGLE_INIT,
    payload: toggleStates,
  };
};
