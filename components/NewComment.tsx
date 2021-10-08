import React, { useState } from 'react';
import { AvatarComment, CommentInput, CommentsTitle, NewCommentForm, SubmitComment } from '../styles/postStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCommentRequest } from '../store/actionCreators/newCommentActionsCreators';

import { RootState } from '../store/reducers';

interface INewComment {
  postId: number;
}

const NewComment: React.FC<INewComment> = ({ postId }): JSX.Element => {
  const [commentValue, setCommentValue] = useState('');
  const dispatch = useDispatch();

  const { error } = useSelector((state: RootState) => state.newComment);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      createNewCommentRequest({
        postId,
        body: commentValue,
      }),
    );
    setCommentValue('');
  };

  const validateNewComment = (): boolean => {
    return commentValue.trim() !== '' ? true : false;
  };

  return (
    <>
      <NewCommentForm onSubmit={onSubmitHandler}>
        <AvatarComment />
        <CommentInput
          placeholder="write a comment..."
          value={commentValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentValue(e.target.value)}
        />
        <SubmitComment disabled={!validateNewComment()} />
      </NewCommentForm>
      {error && <CommentsTitle>{error}</CommentsTitle>}
    </>
  );
};

export default NewComment;
