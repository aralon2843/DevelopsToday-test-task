import { PostAction, PostActionTypes, PostState } from '../../types/post';

const initialState: PostState = {
  post: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
  isLoaded: false,
  error: false,
};
const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.GET_POST:
      return {
        ...state,
        isLoaded: false,
        error: false,
      };
    case PostActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
        error: false,
      };
    case PostActionTypes.GET_POST_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
