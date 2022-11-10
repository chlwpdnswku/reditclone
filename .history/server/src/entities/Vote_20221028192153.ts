// 포스트에서 좋아요와 싫어요 하는 것 value 의 증가감소

import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import BaseEntity from './Entity';
import Post from './Post';
import { User } from './User';
import Comment from './Comment';
// 댓글에 대한 좋아요 싫어요를 할때에는 true
@Entity('votes')
export default class Vote extends BaseEntity {
  @Column()
  value: number;

  //   import 필요
  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;
  @Column()
  username: string;
  @Column({ nullable: true })
  postId: number;
  @ManyToOne(() => Post)
  post: Post;
  @Column({ nullable: true })
  commentId: number;
  @ManyToOne(() => Comment)
  comment: Comment;
}
