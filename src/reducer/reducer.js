//untuk menyatukan semua reducer
import { combineReducers } from "redux";


import postsReducer from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});