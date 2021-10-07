import React from 'react';

import { Title, Posts, Post, PostTitle, PostText, PostImage } from '../styles/homeStyles';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/index';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchPosts } from '../store/actionCreators/homeActionCreators';
import { HomeAction, IPost } from '../types/home';
import MainContainer from '../components/MainContainer';
import { GetStaticProps } from 'next';
import cutString from '../common/cutString';

const Home: React.FC = (): JSX.Element => {
  const { posts, error } = useSelector((state: RootState) => state.home);
  return (
    <MainContainer title="Home">
      {error ? (
        <Title>{error}</Title>
      ) : (
        <>
          <Title>Latest posts</Title>
          <Posts>
            {posts.length > 0 &&
              posts.map((post: IPost) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                  <Post>
                    <PostImage
                      src="https://www.imagemet.com/wp-content/uploads/2016/12/placeholder.png"
                      alt="Just placeholder image"
                    />
                    <PostTitle>{post.title}</PostTitle>
                    <PostText>{cutString(post.body, 150)}</PostText>
                  </Post>
                </Link>
              ))}
          </Posts>
        </>
      )}
    </MainContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeAction> = wrapper.getStaticProps(
  store => (): Promise<any> => {
    const dispatch = store.dispatch as NextThunkDispatch;
    return dispatch(fetchPosts());
  }
);
