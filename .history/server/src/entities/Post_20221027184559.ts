import { Entity } from 'typeorm';
import BaseEntity from './Entity';
// post ENtitiy
@Entity('posts')
export default class Post extends BaseEntity {}
