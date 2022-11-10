import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 이름을 넣어주고
@Entity('users')
export class User {
  // id는 base entity에다가 넣어줌

  email: string;
  email: string;
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
