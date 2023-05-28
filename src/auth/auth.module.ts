import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt'

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      }
    ]),
    JwtModule.register({
      global: true,
      secret: 'MI SEMILLA _ MIS FINANZAS',
      signOptions: { expiresIn: '20h' },
    }),
    PassportModule
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
