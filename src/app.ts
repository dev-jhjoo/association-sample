import express from 'express';
import db from './models/index.model';
import router from './routes/index.route';
import logUtil from './utils/log.util';

const app = express();
app.use( express.json() );
app.use( router );

const port:number = 3001;
app.listen( port, () => {
  // server on
  logUtil.info( `server on port=[${port}]` );

  // db connect
  db.sequelize.authenticate()
    .then( async () => {
      await db.sequelize.sync( db.syncConfig );
      logUtil.info( '[DB]Connection has been established successfully.' );
    }).catch( ( error ) => {
      logUtil.error( `[DB]Unable to connect to the database error=${error}` );
    });
});
