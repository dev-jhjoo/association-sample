import { Request, Response } from 'express';
import dateUtil from '../utils/date.util';
import db from '../models/index.model';

class PostServie {
    getPosts = async ( req:Request, res:Response ) => {
      try {
        const posts = await db.postsModel.findAll({
          include: [
            {
            //   association: db.postsModel.belongsTo( db.usersModel, { foreignKey: 'user_id', targetKey: 'id' }),
              association: db.usersModel.belongsTo( db.postsModel, { foreignKey: 'user_id' }),
              required: true
            }
          ],
          order: [ [ 'id', 'DESC' ] ]
        });
        res.send( posts );
      } catch ( error ) {
        res.send( error );
      }
    }

    createPosts = async ( req:Request, res:Response ) => {
      try {
        const { userId, title, contents } = req.body;
        const post = await db.postsModel.create({ userId, title, contents, count: 0, createdAt: dateUtil.now() });
        res.send({ post });
      } catch ( error ) {
        res.send( error );
      }
    }
}

export default new PostServie();
