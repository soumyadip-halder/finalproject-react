import { SAVE_STR } from "./constant";

/*
This component houses the actions needed to save the search string filters
*/

export const saveStr = (str) => {
  return {
    type: SAVE_STR,
    payload: str,
  };
};
