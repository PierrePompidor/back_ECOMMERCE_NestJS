import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  ref: number;

  @Column()
  nom: string;

  @Column()   
  marque: string;

  @Column()
  prix: number;

  @Column()
  descr: string;

  @Column()
  rayon: string;

  @Column()
  detail: string;

  @Column()
  stock: number;
} 