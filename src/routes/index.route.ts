import { Request, Response, Router } from 'express';
import userRouter from './user.route';
import postRouter from './post.route';
import commentRouter from './comment.route';

const router = Router();

router.use( '/actuator/health', ( req:Request, res:Response ) => res.send( 'OK' ) );
router.use( userRouter );
router.use( postRouter );
router.use( commentRouter );

export default router;
