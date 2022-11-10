import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  // id는 base entity에다가 넣어줌
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
