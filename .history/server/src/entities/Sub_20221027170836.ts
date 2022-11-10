// 커뮤니티 엔티티임
// id,create,update는 베이스 entitiy에 넣어둠

import { Entity } from 'typeorm';
//
import BaseEntity from './Entity';
@Entity()
export default class Sub extends BaseEntity {}
