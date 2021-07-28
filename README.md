# association-sample
association error test

<br>
<br>
<br>

# 문제점
> sequelize에 association을 사용하면서 발생했던 문제에 대해서 재현해본다.

<br>

src/services/post.services.ts
```typescript
// code 12번째 line에 코드를 확인해보기 
association: db.usersModel.belongsTo( db.postsModel, { foreignKey: 'user_id' }),
```

<br>

> 테스트는 vscode extensions에 `REST Client`를 사용했고  
> `/restTest.rest` 파일을 보면 진행할 수 있다.

