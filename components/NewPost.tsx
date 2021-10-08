import React, { useState } from 'react';
import MainContainer from './MainContainer';
import { Title } from '../styles/homeStyles';
import { BodyInput, NewPostForm, SubmitButton, TitleInput } from '../styles/newPostStyles';
import { createNewPostRequest } from '../store/actionCreators/newPostActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useRouter } from 'next/router';

const NewPost: React.FC = (): JSX.Element => {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const { error } = useSelector((state: RootState) => state.newPost);

  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      createNewPostRequest({
        title: titleValue,
        body: bodyValue,
      }),
    );
    if (!error) {
      router.push('/');
    }
  };

  const validateNewPost = (): boolean => {
    if (titleValue.trim() !== '' && bodyValue.trim() !== '') return true;
    return false;
  };

  return (
    <MainContainer title={'New post'}>
      {error ? (
        <Title>{error}</Title>
      ) : (
        <>
          <Title>Create new post</Title>
          <NewPostForm onSubmit={onSubmitHandler}>
            <label htmlFor="titleInput">Title</label>
            <TitleInput
              type="text"
              name="titleInput"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <label htmlFor="bodyInput">Body</label>
            <BodyInput type="text" name="bodyInput" value={bodyValue} onChange={(e) => setBodyValue(e.target.value)} />
            <SubmitButton disabled={!validateNewPost()}>Create post</SubmitButton>
          </NewPostForm>
        </>
      )}
    </MainContainer>
  );
};

export default NewPost;
