import express from 'express';
import morgan from 'morgan';

const app = express();
// 미들웨어들을 하나씩 넣어주는거임 !

// json으로 번역
app.use(express.json());
// 다른 모드들이있는데 개발환경 데브옵션

app.use(morgan('dev'));
// app.get의 url접속을 하면 해당 블록코드를 실행
app.get('/', (_, res) => res.send('running'));

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at http://localhost:${port}`);
  // 데이터베이스 커넥션을 넣어줌

  AppDataSource.initialize()
    .then(async () => {
      console.log('Inserting a new user into the database...');
      const user = new User();
      user.firstName = 'Timber';
      user.lastName = 'Saw';
      user.age = 25;
      await AppDataSource.manager.save(user);
      console.log('Saved a new user with id: ' + user.id);

      console.log('Loading users from the database...');
      const users = await AppDataSource.manager.find(User);
      console.log('Loaded users: ', users);

      console.log(
        'Here you can setup and run express / fastify / any other framework.'
      );
    })
    .catch((error) => console.log(error));
});
