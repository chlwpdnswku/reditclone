import { Column, Entity } from 'typeorm';
import BaseEntity from './Entity';
@Entity('comments')
export default class Comment extends BaseEntity {
    @Column()
}
