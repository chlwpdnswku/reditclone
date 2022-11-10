import { IsEmail, Length } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

// 이름을 넣어주고
@Entity('users')
export class User {
  // id는 base entity에다가 넣어줌

  @Index()
  @IsEmail(undefined, { message: '이메일 주소가 잘못됨' })
  @Length(1, 255, { message: '이메일 주소는 비워둘 수 없다' })
  @Column({ unique: true })
  email: string;
  @Index()
  @Length()
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
