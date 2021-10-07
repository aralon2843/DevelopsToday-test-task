export interface PostState {
  post: IPost;
  isLoaded: boolean;
  error: boolean | string;
}

export interface IComment {
  id?: number;
  postId: number;
  body: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  comments: Array<IComment>;
}

export enum PostActionTypes {
  GET_POST = 'GET_POST',
  GET_POST_SUCCESS = 'GET_POST_SUCCESS',
  GET_POST_ERROR = 'GET_POST_ERROR',
}

interface getPost {
  type: PostActionTypes.GET_POST;
}

interface getPostSuccess {
  type: PostActionTypes.GET_POST_SUCCESS;
  payload: IPost;
}

interface getPostError {
  type: PostActionTypes.GET_POST_ERROR;
  payload: string;
}

export type PostAction = getPost | getPostSuccess | getPostError;
