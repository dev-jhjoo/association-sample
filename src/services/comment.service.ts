import { Request, Response } from 'express';
import dateUtil from '../utils/date.util';
import db from '../models/index.model';

class CommentService {
    getComments = async ( req:Request, res:Response ) => {
      try {
        const { userId } = req.query;
        const comments = await db.commentsModel.findAll({ where: { userId }, order: [ [ 'id', 'DESC' ] ] });
        res.send({ comments });
      } catch ( error ) {
        res.send( error );
      }
    }

    createComments = async ( req:Request, res:Response ) => {
      try {
        const { userId, postId, contents } = req.body;
        const comment = await db.commentsModel.create({ userId, postId, contents, createdAt: dateUtil.now() });
        res.send({ comment });
      } catch ( error ) {
        res.send( error );
      }
    }
}

export default new CommentService();
