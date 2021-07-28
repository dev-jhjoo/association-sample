import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface UsersAttributes{
  id:number;
  name:string;
  age:number;
  address:string;
  createdAt:string;
  updatedAt?:string;
}

export interface UsersCreationAttrivutes extends Optional<UsersAttributes, 'id'>{}
export interface UsersInstance extends Model<UsersAttributes, UsersCreationAttrivutes>, UsersAttributes {}

const UsersModel = ( sequelize:Sequelize ) => sequelize.define<UsersInstance>(
  'users',
  {
    id: { type: DataTypes.BIGINT({ length: 11 }), autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, comment: '이름' },
    age: { type: DataTypes.INTEGER, comment: '나이' },
    address: { type: DataTypes.STRING, comment: '' },
    createdAt: { type: DataTypes.DATE, comment: '등록 일시' },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
  },
  {
    underscored: true,
    timestamps: false,
    comment: 'user table'
  }
);

export default UsersModel;
