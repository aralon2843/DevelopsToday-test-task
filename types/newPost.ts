import { IPost } from './post';

export interface NewPostState {
  newPost: IPost;
  isLoaded: boolean;
  error: boolean | string;
}

export interface INewPost {
  title: string;
  body: string;
}

export enum NewPostActionsTypes {
  CREATE_NEW_POST = 'CREATE_NEW_POST',
  CREATE_NEW_POST_SUCCESS = 'CREATE_NEW_POST_SUCCESS',
  CREATE_NEW_POST_ERROR = 'CREATE_NEW_POST_ERROR',
}

interface createNewPost {
  type: NewPostActionsTypes.CREATE_NEW_POST;
}

interface createNewPostSuccess {
  type: NewPostActionsTypes.CREATE_NEW_POST_SUCCESS;
  payload: IPost;
}

interface createNewPostError {
  type: NewPostActionsTypes.CREATE_NEW_POST_ERROR;
  payload: string;
}

export type NewPostAction = createNewPost | createNewPostSuccess | createNewPostError;
