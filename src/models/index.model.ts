import { Sequelize } from 'sequelize';
import logUtil from '../utils/log.util';
import myConfig from '../config/env.config';
import CommentsModel from './comments.model';
import PostsModel from './posts.model';
import UsersModel from './users.model';

const { database, username, password, dbhost, dbport } = myConfig;
const options:Record<string, unknown> = {
  host: dbhost,
  port: dbport,
  dialect: 'mysql',
  timezone: '+09:00',
  models: [ `${__dirname}/models` ],
  pool: { max: 5, min: 1, idle: 10000 },
  logging: ( msg ) => { logUtil.info( msg ); }
};
const syncConfig = { force: false, alter: true };

const sequelize = new Sequelize( database, username, password, options );
const usersModel = UsersModel( sequelize );
const postsModel = PostsModel( sequelize );
const commentsModel = CommentsModel( sequelize );

const db = {
  sequelize,
  syncConfig,
  usersModel,
  postsModel,
  commentsModel
};

export default db;
