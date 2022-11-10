import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
