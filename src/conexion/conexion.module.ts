import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolEntity } from './rol.entity';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './category.entity';
import { CommunityEntity } from './community.entity';
import { BlogEntity } from './blog.entity';
import { ArticleEntity } from './article.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([RolEntity,UserEntity,
            CategoryEntity,
            CommunityEntity,
            BlogEntity,
            ArticleEntity])
    ],
    
})
export class ConexionModule {}
