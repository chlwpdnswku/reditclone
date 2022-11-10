// 커뮤니티 엔티티임
// id,create,update는 베이스 entitiy에 넣어둠

import { Expose } from 'class-transformer';
import { Column, Entity, Index } from 'typeorm';
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
  banenrUrn: string;

  @Column({ nullable: true })
  username: string;

//   class transfoms class로 프론트에보내서 이미지를 가져옴 json형식은못하고 class형식은 가져옴! 
  @Expose()
}
