import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface CommentsAttributes{
  id:number;
  postId:number;
  userId:number;
  contents:string;
  createdAt:string;
  updatedAt?:string;
}

export interface CommentsCreationAttrivutes extends Optional<CommentsAttributes, 'id'>{}
export interface CommentsInstance extends Model<CommentsAttributes, CommentsCreationAttrivutes>, CommentsAttributes {}

const CommentsModel = ( sequelize:Sequelize ) => sequelize.define<CommentsInstance>(
  'comments',
  {
    id: { type: DataTypes.BIGINT({ length: 11 }), autoIncrement: true, primaryKey: true },
    postId: { type: DataTypes.BIGINT({ length: 11 }), comment: 'post pk' },
    userId: { type: DataTypes.BIGINT({ length: 11 }), comment: 'user pk' },
    contents: { type: DataTypes.STRING, comment: '내용' },
    createdAt: { type: DataTypes.DATE, comment: '등록 일시' },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
  },
  {
    underscored: true,
    timestamps: false,
    comment: '댓글'
  }
);

export default CommentsModel;
