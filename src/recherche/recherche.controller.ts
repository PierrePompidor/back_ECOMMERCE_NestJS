import { Controller, Get, Param } from '@nestjs/common';
import { RechercheService } from './recherche.service';

@Controller('recherche')
export class RechercheController {
    constructor(private readonly rechercheService: RechercheService) {}
    
    @Get()
    getArticles(): Object {
      return this.rechercheService.getArticles();
    }

    @Get(':rayon/:marque/:prixMax')
    getArticlesFiltrés(@Param('rayon') rayon: string,
                       @Param('marque') marque: string,
                       @Param('prixMax') prixMax: string): Object {
      console.log('Passage par le contrôleur avec', rayon, marque, prixMax);
      return this.rechercheService.getArticlesFiltrés(rayon, marque, prixMax);
    }
}