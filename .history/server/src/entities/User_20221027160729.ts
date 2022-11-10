import { IsEmail, Length } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';

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
  @Length(3, 32, { message: '사용자이름은 3자 이상이어야 합니다' })
  @Column()
  username: string;

  @Column()
  @Length(6, 255, { message: '비밀번호는 5자리 이상이어야 합니다' })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // 1.타입 2.
}
