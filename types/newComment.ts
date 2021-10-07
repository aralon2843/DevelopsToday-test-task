import { IComment } from './post';

export interface NewCommentState {
  newComment: IComment | {};
  isLoaded: boolean;
  error: boolean | string;
}

export interface INewComment {
  postId: number;
  body: string;
}

export enum NewCommentActionsTypes {
  CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT',
  CREATE_NEW_COMMENT_SUCCESS = 'CREATE_NEW_COMMENT_SUCCESS',
  CREATE_NEW_COMMENT_ERROR = 'CREATE_NEW_COMMENT_ERROR',
}

interface createNewComment {
  type: NewCommentActionsTypes.CREATE_NEW_COMMENT;
}

interface createNewCommentSuccess {
  type: NewCommentActionsTypes.CREATE_NEW_COMMENT_SUCCESS;
  payload: IComment;
}

interface createNewCommentError {
  type: NewCommentActionsTypes.CREATE_NEW_COMMENT_ERROR;
  payload: string;
}

export type NewCommentAction = createNewComment | createNewCommentSuccess | createNewCommentError;
