import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Wallet, WalletSchema } from 'src/wallet/entities/wallet.entity';


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
        name: Wallet.name,
        schema: WalletSchema,
      }
    ])
  ]
})
export class UserModule {}
