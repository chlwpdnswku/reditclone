// 커뮤니티 엔티티임
// id,create,update는 베이스 entitiy에 넣어둠

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

  @Column({type:'text',nullable:true})

//   이미지는 일단 없애기 기본이미지를넣어줌
@Column({nullable:trues})
}
