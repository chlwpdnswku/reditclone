import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from './Entity';
import { User } from './User';
@Entity('comments')
export default class Comment extends BaseEntity {
  @Index()
  @Column()
  identifier: string;
  @Column()
  body: string;
  @Column()
  username: string;
  //   작성한 사람의 조인컬럼
  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;
}
