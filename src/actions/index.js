import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const FETCH_POST = "FETCH_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com";
const API_KEY = "?key=hareendra123";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callBack) {
  const request = axios
    .post(`${ROOT_URL}/api/posts${API_KEY}`, values)
    .then(() => callBack()); //calling after post is made. call back is passed from post_new component.
  return {
    type: CREATE_POSTS,
    payload: request
  };
}
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/api/posts/${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
