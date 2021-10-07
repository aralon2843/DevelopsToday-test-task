import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  Container,
  Header,
  Navigation,
  Menu,
  MenuItem,
  Content,
} from '../styles/homeStyles';
import Head from 'next/head';

interface IMainContainerProps {
  children: React.ReactNode;
  title: string;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children, title }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Container>
          <Header>
            <Container>
              <Navigation>
                <Menu>
                  <Link href="/">
                    <MenuItem>Home</MenuItem>
                  </Link>
                  <Link href="/posts/new">
                    <MenuItem>Create post</MenuItem>
                  </Link>
                </Menu>
              </Navigation>
            </Container>
          </Header>
          <Content>{children}</Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default MainContainer;
