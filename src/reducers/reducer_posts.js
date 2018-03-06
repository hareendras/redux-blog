import _ from "lodash";
import { FETCH_POSTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); //mapKeys turns the array whick comes from API to an obect with key 'id'
    default:
      return state;
  }
}
