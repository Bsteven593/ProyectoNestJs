import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [
  BlogModule,
  TypeOrmModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    // password: 'Campos0430',//TODO la contraseña varia
    database: 'ventas',
    autoLoadEntities: true,
    synchronize: true,
    dropSchema: true,
  })
],
  controllers: [
    AppController,
    BlogController,
  ],
  providers: [
    AppService,
    BlogService,
  ],
})
export class AppModule {}
