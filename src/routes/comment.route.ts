import { Router } from 'express';
import commentService from '../services/comment.service';

const commentRouter = Router();

commentRouter.get( '/v1/comments', commentService.getComments );
commentRouter.post( '/v1/comments', commentService.createComments );

export default commentRouter;
