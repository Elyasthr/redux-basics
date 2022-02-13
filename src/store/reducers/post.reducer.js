import { GET_POST, ADD_POST, EDIT_POST, DELETE_POST } from "../action/post.action";

const initialState = {}

export default function postReducer(state = initialState, action) {

  switch (action.type) {
    case GET_POST:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content
          }
        } else return post
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.postId);
    default:
      return state;
  }
}