import { Dispatch } from 'react';
import API from '../../api/api';
import { IPost, PostAction, PostActionTypes } from '../../types/post';

const getPost = (): PostAction => {
  return {
    type: PostActionTypes.GET_POST,
  };
};

const getPostSuccess = (payload: IPost): PostAction => {
  return {
    type: PostActionTypes.GET_POST_SUCCESS,
    payload,
  };
};

const getPostError = (payload: string): PostAction => {
  return {
    type: PostActionTypes.GET_POST_ERROR,
    payload,
  };
};

export const fetchPost = (id: number) => {
  return async (dispatch: Dispatch<PostAction>): Promise<void> => {
    dispatch(getPost());
    try {
      const post = await API.getPost(id);
      dispatch(getPostSuccess(post));
    } catch (e) {
      dispatch(getPostError('Sorry, there was an error loading post'));
    }
  };
};
