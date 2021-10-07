export interface HomeState {
  posts: Array<IPost> | [];
  isLoaded: boolean;
  error: boolean | string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export enum HomeActionTypes {
  GET_POSTS = 'GET_POSTS',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR = 'GET_POSTS_ERROR',
}

interface GetPostsAction {
  type: HomeActionTypes.GET_POSTS;
}

interface GetPostsSuccess {
  type: HomeActionTypes.GET_POSTS_SUCCESS;
  payload: Array<IPost>;
}
interface GetPostsError {
  type: HomeActionTypes.GET_POSTS_ERROR;
  payload: string;
}

export type HomeAction = GetPostsAction | GetPostsSuccess | GetPostsError;
