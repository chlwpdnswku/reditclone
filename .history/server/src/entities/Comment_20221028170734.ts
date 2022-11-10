import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseEntity from './Entity';
import Post from './Post';
import { User } from './User';
import Vote from './Vote';
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
  // 어떠한포스트의 댓글인지?
  @Column()
  postId: number;
  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post;
  //   리턴값의 부분을 빼준
  @Exclude()
  //   vote부분의 comment
  @OneToMany(() => Vote, (vote) => vote.comment)
  votes: Vote[];
}
