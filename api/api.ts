import axios from 'axios';
import { INewPost } from '../types/newPost';
import { INewComment } from '../types/newComment';

const axiosInstance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

const API = {
  getPosts(): Promise<any> {
    return axiosInstance.get('posts').then(response => response.data);
  },
  getPost(id: number): Promise<any> {
    return axiosInstance.get(`posts/${id}?_embed=comments`).then(response => response.data);
  },
  createNewPost(newPost: INewPost): Promise<any> {
    const { title, body } = newPost;
    return axiosInstance.post('posts', { title, body }).then(response => response.data);
  },
  createNewComment(newComment: INewComment): Promise<any> {
    const { postId, body } = newComment;
    return axiosInstance.post('comments', { postId, body }).then(response => response.data);
  },
};

export default API;
