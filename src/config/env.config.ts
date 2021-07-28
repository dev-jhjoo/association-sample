import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const myConfig = {
  // db config
  database: process.env.MYSQL_DB,
  dbhost: process.env.MYSQL_DB_HOST,
  dbport: +process.env.MYSQL_DB_PORT,
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD
};

export default myConfig;
