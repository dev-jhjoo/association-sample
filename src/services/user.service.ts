import { Request, Response } from 'express';
import dateUtil from '../utils/date.util';
import db from '../models/index.model';

class UserService {
    getUsers = async ( req:Request, res:Response ) => {
      try {
        const users = await db.usersModel.findAll({ order: [ [ 'id', 'DESC' ] ] });
        res.send({ users });
      } catch ( error ) {
        res.send( error );
      }
    }

    createUser = async ( req:Request, res:Response ) => {
      try {
        const { name, age, address } = req.body;
        const user = await db.usersModel.create({ name, age, address, createdAt: dateUtil.now() });
        res.send({ user });
      } catch ( error ) {
        res.send( error );
      }
    }
}

export default new UserService();
