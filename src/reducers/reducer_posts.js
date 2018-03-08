import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const post = action.payload.data;
      // add state and on top of that ammend {key action.payload.data.id : val action.payload.data}
      return { ...state, [action.payload.data.id]: [action.payload.data] };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); //mapKeys turns the array whick comes from API to an obect with key 'id'
    default:
      return state;
  }
}
