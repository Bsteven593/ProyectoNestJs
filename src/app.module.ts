import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionService } from './conexion/conexion.service';
import { ConexionController } from './conexion/conexion.controller';
import { ConexionModule } from './conexion/conexion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

//@Module({
//  imports: [ConexionModule],
//  controllers: [AppController, ConexionController],
 // providers: [AppService, ConexionService],
//})

@Module({
  imports: [ConexionModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'bslmdsqa',
    autoLoadEntities:true,
    synchronize:true,
    dropSchema:true
  })],
  controllers: [AppController,ConexionController],
  providers: [AppService,ConexionService],
})
export class AppModule {}