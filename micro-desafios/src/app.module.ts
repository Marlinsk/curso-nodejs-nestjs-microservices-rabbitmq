import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@machinecloud.fdso3.mongodb.net/srdesafios?retryWrites=true&w=majority`,
      { useNewUrlParser: true }),
    DesafiosModule,
    PartidasModule,
    ProxyRMQModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule { }
