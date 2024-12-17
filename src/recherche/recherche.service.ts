import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';
import { Repository, LessThanOrEqual } from 'typeorm';

@Injectable()
export class RechercheService {
    constructor(    
        @InjectRepository(Article) private articleRepository: Repository<Article>
    ) {}

    async getArticles(): Promise<Article[]> {
        return await this.articleRepository.find();
    }

    async getArticlesFiltrés(rayon:string, marque:string, prixMax:string): Promise<Article[]> {
        let filtre = {};
        if (rayon != "*") filtre['rayon'] = rayon;
        if (marque != "*") filtre['marque'] = marque;
        if (prixMax != "*") filtre['prix'] = LessThanOrEqual(parseFloat(prixMax));
        console.log(filtre);
        return await this.articleRepository.find({where: filtre});
    }
}
