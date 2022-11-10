import { Column, Entity, Index, ManyToOne } from 'typeorm';
import BaseEntity from './Entity';
@Entity('comments')
export default class Comment extends BaseEntity {
  @Index()
  @Column()
  identifier: string;
  @Column()
  body: string;
  @Column()
  username: string;
  //   작성한 사람
  @ManyToOne(()=>User)
}
