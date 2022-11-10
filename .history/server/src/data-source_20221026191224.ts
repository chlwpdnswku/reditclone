import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  // 개발환경에는 tyue  개발환경에는false 싱크를 바꿔서 데이터날라가면클일남
  synchronize: true,
  logging: false,
  //user의객체가있음
  entities: [User],
  migrations: [],
  subscribers: [],
});
