// 커뮤니티 엔티티임
// id,create,update는 베이스 entitiy에 넣어둠

import { Expose } from 'class-transformer';
import { join } from 'path';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
//
import BaseEntity from './Entity';
@Entity()
export default class Sub extends BaseEntity {
  @Index()
  @Column({ unique: true })
  name: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  //   이미지는 일단 없애기 기본이미지를넣어줌 이미지에이름만넣어줌일단
  @Column({ nullable: true })
  imageUrn: string;

  @Column({ nullable: true })
  bannerUrn: string;

  @Column({ nullable: true })
  username: string;
  @ManyToOne(() => User)
  //   reference는 user테이블?
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  @OneToMany(() => Post, (post) => post.sub)
  posts: Post[];
  //   class transfoms class로 프론트에보내서 이미지를 가져옴 json형식은못하고 class형식은 가져옴!
  // APP+URL 로컬호스트 4000번에 떠있는데 나중에환경변수로 넣기
  @Expose()
  get imageUrl(): string {
    return this.imageUrn
      ? `${process.env.APP_URL}/images/${this.imageUrn}`
      : 'https://www.gravatar.com/avatar?d=mp&f=y';
  }
  // vote는 댓글 추천 위아래 개수
  @Expose()
  get bannerUrl(): string {
    return this.bannerUrn
      ? `${process.env.APP_URL}/images/${this.bannerUrn}`
      : undefined;
  }
}
