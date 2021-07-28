import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface PostsAttributes{
  id:number;
  userId:number;
  title:string;
  contents:string;
  count:number;
  createdAt:string;
  updatedAt?:string;
}

export interface PostsCreationAttrivutes extends Optional<PostsAttributes, 'id'>{}
export interface PostsInstance extends Model<PostsAttributes, PostsCreationAttrivutes>, PostsAttributes {}

const PostsModel = ( sequelize:Sequelize ) => sequelize.define<PostsInstance>(
  'posts',
  {
    id: { type: DataTypes.BIGINT({ length: 11 }), autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.BIGINT({ length: 11 }), comment: 'user pk' },
    title: { type: DataTypes.STRING, comment: '제목' },
    contents: { type: DataTypes.STRING, comment: '내용' },
    count: { type: DataTypes.INTEGER, comment: '조회수' },
    createdAt: { type: DataTypes.DATE, comment: '등록 일시' },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
  },
  {
    underscored: true,
    timestamps: false,
    comment: 'post table'
  }
);

export default PostsModel;
