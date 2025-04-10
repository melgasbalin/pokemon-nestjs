import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { EnvConfiguration } from 'src/config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({  
  imports: [
    ConfigModule.forRoot({}),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: EnvConfiguration().dbHost,
      port: EnvConfiguration().dbPort,
      database: EnvConfiguration().dbName,
      username: EnvConfiguration().dbUsername,
      password: EnvConfiguration().dbPassword,
      autoLoadEntities: true,
      synchronize: true, 
      }),   
    
    PokemonModule],
    
  controllers: [],
  providers: [],
})
export class AppModule {}
