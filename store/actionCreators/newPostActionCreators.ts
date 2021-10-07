import { Dispatch } from 'react';
import API from '../../api/api';
import { IPost } from '../../types/post';
import { INewPost, NewPostAction, NewPostActionsTypes } from '../../types/newPost';

const createNewPost = (): NewPostAction => {
  return {
    type: NewPostActionsTypes.CREATE_NEW_POST,
  };
};

const createNewPostSuccess = (payload: IPost): NewPostAction => {
  return {
    type: NewPostActionsTypes.CREATE_NEW_POST_SUCCESS,
    payload,
  };
};

const createNewPostError = (payload: string): NewPostAction => {
  return {
    type: NewPostActionsTypes.CREATE_NEW_POST_ERROR,
    payload,
  };
};

export const createNewPostRequest = (newPost: INewPost) => {
  return async (dispatch: Dispatch<NewPostAction>): Promise<void> => {
    dispatch(createNewPost());
    try {
      const response = await API.createNewPost(newPost);
      dispatch(createNewPostSuccess(response));
    } catch (e) {
      dispatch(createNewPostError('Failed to create a new post, please try later'));
    }
  };
};
