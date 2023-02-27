import _ from "lodash";
import jsonPlaceholder from "../apis/api";


//fungsi store untuk mendapatkan akses ke dalam state dan melakukan perubahan state
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};


//fungsi untuk request post data ke api
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({type: "FETCH_POSTS", payload: response.data});
};

//fungsi untuk request data user ke api berdasarkan id
export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: "FETCH_USER", payload: response.data});
};