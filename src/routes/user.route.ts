import { Router } from 'express';
import userService from '../services/user.service';

const userRouter = Router();

userRouter.get( '/v1/users', userService.getUsers );
userRouter.post( '/v1/users', userService.createUser );

export default userRouter;
