// 커뮤니티 엔티티임
// id,create,update는 베이스 entitiy에 넣어둠

import { BaseEntity, Entity } from 'typeorm';
// 이건왜배열이지
@Entity()
export default class Sub extends BaseEntity {}
