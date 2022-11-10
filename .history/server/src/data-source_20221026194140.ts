import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'test',
  // 개발환경에는 tyue  개발환경에는false 싱크를 바꿔서 데이터날라가면클일남
  synchronize: true,
  logging: false,
  //user의객체가있음 하나하나생성할때마다 넣어도됨전체를 다 넣어도되고
  entities: ['src/entities/**/*.ts'],
  migrations: [],
  subscribers: [],
});
