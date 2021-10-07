import { NextThunkDispatch, wrapper } from '../../store';
import { fetchPost } from '../../store/actionCreators/postActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import React, { useEffect } from 'react';
import {
  PostWrapper,
  PostImage,
  PostTitle,
  PostText,
  PostComments,
  PostComment,
  AvatarComment,
  CommentsTitle,
} from '../../styles/postStyles';
import { Title } from '../../styles/homeStyles';
import { IComment, PostAction } from '../../types/post';
import MainContainer from '../../components/MainContainer';
import NewComment from '../../components/NewComment';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const Post: React.FC = (): JSX.Element => {
  const { post, error } = useSelector((state: RootState) => state.post);

  const dispatch = useDispatch();

  const { query } = useRouter();

  useEffect(() => {
    dispatch(fetchPost(Number(query.id)));
  }, [post.comments]);

  return (
    <MainContainer title={post.title}>
      {error ? (
        <Title>{error}</Title>
      ) : (
        <PostWrapper>
          <PostTitle>{post.title}</PostTitle>
          <PostImage
            src="https://www.naturestone.com/app/uploads/2013/12/600x400.gif"
            alt="Just placeholder image"
          />
          <PostText>{post.body} </PostText>
          <CommentsTitle>Comments:</CommentsTitle>
          <NewComment postId={post.id} />
          <PostComments>
            {post.comments?.length > 0 ? (
              post.comments?.map((comment: IComment) => (
                <PostComment key={comment.id}>
                  <AvatarComment />
                  {comment.body}
                </PostComment>
              ))
            ) : (
              <CommentsTitle fz={16} color={'#666'} fw={400}>
                There are no comments at the moment. Be the first
              </CommentsTitle>
            )}
          </PostComments>
        </PostWrapper>
      )}
    </MainContainer>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps<PostAction> = wrapper.getServerSideProps(
  store =>
    ({ query }): Promise<any> => {
      const dispatch = store.dispatch as NextThunkDispatch;
      return dispatch(fetchPost(Number(query.id)));
    }
);
