import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

// 그냥이걸 가져와서 사용을 하는거임 ㅅ
export default abstract class Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createAt: Date;
  @Update
}
