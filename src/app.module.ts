import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RechercheService } from './recherche/recherche.service';
import { RechercheController } from './recherche/recherche.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRepository } from './repositories/article.repository';
import { Article } from './entities/article.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ECOMMERCE',
    entities: [Article],
    synchronize: true,
    }),
    TypeOrmModule.forFeature([Article])],
  controllers: [AppController, RechercheController],
  providers: [ArticleRepository, AppService, RechercheService],
})
export class AppModule {}
