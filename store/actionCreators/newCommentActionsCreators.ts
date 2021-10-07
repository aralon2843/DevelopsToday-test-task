import { Dispatch } from 'react';
import API from '../../api/api';
import { IComment } from '../../types/post';
import { INewComment, NewCommentAction, NewCommentActionsTypes } from '../../types/newComment';

const createNewComment = (): NewCommentAction => {
  return {
    type: NewCommentActionsTypes.CREATE_NEW_COMMENT,
  };
};

const createNewCommentSuccess = (payload: IComment): NewCommentAction => {
  return {
    type: NewCommentActionsTypes.CREATE_NEW_COMMENT_SUCCESS,
    payload,
  };
};

const createNewCommentError = (payload: string): NewCommentAction => {
  return {
    type: NewCommentActionsTypes.CREATE_NEW_COMMENT_ERROR,
    payload,
  };
};

export const createNewCommentRequest = (newComment: INewComment) => {
  return async (dispatch: Dispatch<NewCommentAction>): Promise<void> => {
    dispatch(createNewComment());
    try {
      const response = await API.createNewComment(newComment);
      dispatch(createNewCommentSuccess(response));
    } catch (e) {
      dispatch(createNewCommentError('Failed to create a new comment, please try later'));
    }
  };
};
