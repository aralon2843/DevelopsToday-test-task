import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  padding: 10px 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #ffffff;
  border-bottom: 2px solid #f6f6f6;
`;

export const Navigation = styled.nav``;

export const Content = styled.div`
  padding-top: 70px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  position: relative;
  padding: 5px;
  z-index: 2;
  text-decoration: none;
  transition: 0.3s color ease-out;

  &:nth-child(1):hover {
    color: #ffffff;
  }

  &:nth-child(1):before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    border-radius: 5px;
    z-index: -1;
  }

  &:nth-child(1):hover::before {
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:nth-child(2) {
    background-color: #262626;
    padding: 10px 20px;
    border-radius: 7px;
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

export const Posts = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    display: block;
  }
`;

export const Post = styled.div`
  overflow: hidden;
  padding: 5px;
  max-width: 350px;
  margin: 20px auto;
  cursor: pointer;
`;

export const PostImage = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 100%;
  margin-bottom: 10px;
`;

export const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  word-wrap: anywhere;
  margin-bottom: 10px;
`;

export const PostText = styled.p`
  max-width: 200px;
  color: #707070;
  word-wrap: anywhere;
`;
