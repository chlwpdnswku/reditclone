import { Column, Entity, Index } from 'typeorm';
import BaseEntity from './Entity';
// post ENtitiy
// Create table이라는뜻임이거
@Entity('posts')
export default class Post extends BaseEntity {
    @Index()
    @Column()
    identifier:string
    @Column()
    title:string
    @Index()
    @Column()
    slug:string
    @Column({nullable:true,type:'text'})
    body:string
    @Column()
    subName:string
    @Column()

}
