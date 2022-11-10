import { BaseEntity, Entity } from 'typeorm';

@Entity('comments')
export default class Comment extends BaseEntity {}
