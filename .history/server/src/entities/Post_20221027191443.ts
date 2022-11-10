import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from './Entity';
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

  @ManyToOne(() => Sub, (user) => sub.posts)
  @JoinColumn({ name: 'subName', referencedColumnName: 'username' })
  user: User;
}
