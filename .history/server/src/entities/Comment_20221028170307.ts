import { Column, Entity, Index } from 'typeorm';
import BaseEntity from './Entity';
@Entity('comments')
export default class Comment extends BaseEntity {
  @Index()
  @Column()
  identifier: string;
}
