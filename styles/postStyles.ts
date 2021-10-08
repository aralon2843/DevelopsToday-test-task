import styled from 'styled-components';

export const PostWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  overflow: hidden;
`;

export const PostImage = styled.img`
  object-position: center;
  object-fit: cover;
  margin: 15px auto;
  max-width: 100%;
`;

export const PostTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
`;

export const PostText = styled.p`
  word-wrap: break-word;
  line-height: 22px;
  margin-bottom: 25px;
`;

interface ICommentsTitle {
  fz?: number;
  color?: string;
  fw?: number;
}

export const CommentsTitle = styled.h2<ICommentsTitle>`
  font-weight: ${({ fw }) => (fw ? fw : 500)};
  font-size: ${({ fz }) => (fz ? fz + 'px' : '20px')};
  color: ${({ color }) => (color ? color : '#363636')};
  text-align: center;
  margin-bottom: 15px;
`;

export const CommentInput = styled.textarea`
  resize: none;
  width: 460px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 15px;
`;

export const PostComments = styled.div``;

export const AvatarComment = styled.div`
  background: url('https://cdn-icons-png.flaticon.com/512/149/149071.png') center/cover no-repeat;
  min-width: 30px;
  min-height: 30px;
  margin-right: 20px;
`;

export const PostComment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  line-height: 22px;
  word-wrap: break-word;
`;

export const NewCommentForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

export const SubmitComment = styled.button`
  outline: none;
  border: none;
  background: url('https://cdn-icons-png.flaticon.com/512/724/724954.png') center/cover no-repeat;
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 10px;
  &:disabled {
    opacity: 0.5;
  }
`;
