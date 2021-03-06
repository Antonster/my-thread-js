import {
  SET_ALL_POSTS,
  LOAD_MORE_POSTS,
  ADD_POST,
  SET_EXPANDED_POST,
  SET_UPDATED_POST,
  SET_ALL_REACTIONS,
  SET_DELETED_POST
} from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
        hasMorePosts: Boolean(action.posts.length)
      };
    case LOAD_MORE_POSTS:
      return {
        ...state,
        posts: [...(state.posts || []), ...action.posts],
        hasMorePosts: Boolean(action.posts.length)
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts]
      };
    case SET_EXPANDED_POST:
      return {
        ...state,
        expandedPost: action.post
      };
    case SET_UPDATED_POST:
      return {
        ...state,
        updatedPost: action.post
      };
    case SET_ALL_REACTIONS:
      return {
        ...state,
        reactions: action.reactions
      };
    case SET_DELETED_POST:
      return {
        ...state,
        deletedPost: action.post
      };
    default:
      return state;
  }
};
