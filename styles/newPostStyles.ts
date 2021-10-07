import styled from 'styled-components';

const Input = styled.input`
  display: block;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const TitleInput = styled(Input)``;
export const BodyInput = styled(Input)``;

export const SubmitButton = styled.button`
  display: block;
  outline: none;
  border: none;
  background-color: #262626;
  padding: 10px 20px;
  border-radius: 7px;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;

export const NewPostForm = styled.form`
  margin: 0 auto;
  max-width: 600px;

  label {
    text-align: left;
    line-height: 38px;
    font-size: 18px;
  }
`;
