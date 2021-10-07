import { NewPostAction, NewPostActionsTypes, NewPostState } from '../../types/newPost';

const initialState: NewPostState = {
  newPost: {},
  isLoaded: false,
  error: false,
};

const newPostReducer = (state = initialState, action: NewPostAction): NewPostState => {
  switch (action.type) {
    case NewPostActionsTypes.CREATE_NEW_POST:
      return {
        ...state,
        isLoaded: false,
        error: false,
      };

    case NewPostActionsTypes.CREATE_NEW_POST_SUCCESS:
      return {
        newPost: action.payload,
        isLoaded: true,
        error: false,
      };
    case NewPostActionsTypes.CREATE_NEW_POST_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newPostReducer;
