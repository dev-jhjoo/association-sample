import { Router } from 'express';
import postService from '../services/post.service';

const postRouter = Router();

postRouter.get( '/v1/posts', postService.getPosts );
postRouter.post( '/v1/posts', postService.createPosts );

export default postRouter;
