import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { PfxModule } from './pfx/pfx.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ]
    }),
    MongooseModule.forRoot(process.env.MONGODB), 
    UserModule, PfxModule
  ],
})
export class AppModule {}
