import { NewCommentState, NewCommentAction, NewCommentActionsTypes } from '../../types/newComment';

const initialState: NewCommentState = {
  newComment: {},
  isLoaded: false,
  error: false,
};

const newCommentReducer = (state = initialState, action: NewCommentAction): NewCommentState => {
  switch (action.type) {
    case NewCommentActionsTypes.CREATE_NEW_COMMENT:
      return {
        ...state,
        isLoaded: false,
        error: false,
      };

    case NewCommentActionsTypes.CREATE_NEW_COMMENT_SUCCESS:
      return {
        newComment: action.payload,
        isLoaded: true,
        error: false,
      };
    case NewCommentActionsTypes.CREATE_NEW_COMMENT_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newCommentReducer;
