import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  /*
  async findAll(): Promise<Article[]> {
    return await this.articleRepository.find();
  }
  
  async findOne(id: number): Promise<Article | null> {
    return await this.articleRepository.findOneBy({ id });
  }

  async create(article: Article): Promise<Article> {
    return await this.articleRepository.save(article);
  }

  async update(id: number, article: Article): Promise<Article> {
    await this.articleRepository.update(id, article);
    return await this.articleRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }
    */
}