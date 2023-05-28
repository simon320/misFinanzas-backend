import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Pfx, PfxSchema } from 'src/pfx/entities/pfx.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Pfx.name,
        schema: PfxSchema,
      }
    ])
  ]
})
export class UserModule {}
