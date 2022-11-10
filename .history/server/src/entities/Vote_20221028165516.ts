// 포스트에서 좋아요와 싫어요 하는 것 value 의 증가감소

import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import  BaseEntity from './Entity' 
import {User} from './User'
// 댓글에 대한 좋아요 싫어요를 할때에는 true
@Entity('votes')
export default class Vote extends BaseEntity {
  @Column()
  value: number;

  @ManyToOne(()=> User)
  @JoinColumn({name:'username',referencedColumnName:'username'})
  @Column()
  username:string
  @Column()
  @Column()
  @Column()

}
