import { Dispatch } from 'react';
import API from '../../api/api';
import { HomeAction, HomeActionTypes, IPost } from '../../types/home';

export const getPosts = (): HomeAction => {
  return {
    type: HomeActionTypes.GET_POSTS,
  };
};

export const getPostsSuccess = (payload: Array<IPost>): HomeAction => {
  return {
    type: HomeActionTypes.GET_POSTS_SUCCESS,
    payload,
  };
};

export const getPostsError = (payload: string): HomeAction => {
  return {
    type: HomeActionTypes.GET_POSTS_ERROR,
    payload,
  };
};

export const fetchPosts = () => {
  return async (dispatch: Dispatch<HomeAction>): Promise<void> => {
    dispatch(getPosts());
    try {
      const posts = await API.getPosts();
      dispatch(getPostsSuccess(posts));
    } catch (e) {
      dispatch(getPostsError('Sorry, there was an error loading posts'));
    }
  };
};
