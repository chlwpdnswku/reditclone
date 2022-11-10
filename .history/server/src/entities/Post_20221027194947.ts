import { throws } from 'assert';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseEntity from './Entity';
import Sub from './Sub';
import { User } from './User';
// post ENtitiy
// Create table이라는뜻임이거
@Entity('posts')
export default class Post extends BaseEntity {
  @Index()
  @Column()
  identifier: string;
  @Column()
  title: string;
  @Index()
  @Column()
  slug: string;
  @Column({ nullable: true, type: 'text' })
  body: string;
  @Column()
  subName: string;
  @Column()
  username: string;

  // -------관계형
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;

  @ManyToOne(() => Sub, (sub) => sub.posts)
  @JoinColumn({ name: 'subName', referencedColumnName: 'name' })
  sub: Sub;

  //   Exclude Expose
  @Exclude()
  //여기는왜  post? 하나를 가리켜서 그런가?
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  //ExPose() 주소를 가져온다는 뜻인가
  @Expose() get url(): string {
    return `r/${this.subName}/${this.identifier}/${this.slug}`;
  }
  @Expose() get commentCount(): number {
    return this.comments?.length;
  }
  @Expose() get voteScore(): number {
    return this.votes?.reduce((memo, curt) => memo + (curt.value || 0), 0);
  }

  protected userVote: number;
}
