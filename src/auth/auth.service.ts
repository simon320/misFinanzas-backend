import { HttpException, Injectable } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException } from "@nestjs/common"
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt'; 
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/entities/user.entity';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Console } from 'console';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    try {
      const { password } = registerAuthDto;
      const passToHash = await hash( password, 10);
      registerAuthDto = { ...registerAuthDto, password: passToHash }
      return await this.userModel.create( registerAuthDto );

    } catch( error ) {
      this.handleError( error );
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { mail, password } = loginAuthDto;
    const findUser = await this.userModel.findOne({ mail });
    if( !findUser ) throw new HttpException('USER_NOT_FOUND', 404);
    
    const checkPass = await compare( password, findUser.password )
    if( !checkPass ) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id:findUser._id, name: findUser.nickname }
    const token = this.jwtService.sign(payload)
    const data = {
      user: findUser,
      token
    }
    return data;
  }

  async getUserById(id: string) {
    const findUser = await this.userModel.findById( id );
    if( !findUser ) throw new HttpException('USER_NOT_FOUND', 404);

    const payload = { id:findUser._id, name: findUser.nickname }
    const token = this.jwtService.sign(payload)
    const data = {
      user: findUser,
      token
    }
    return data;
  }

  private handleError(error: any) {
    if( error.code == 11000 ) throw new BadRequestException(`Ya existe un usuario con ese Email.`)
    console.error(error);
    throw new InternalServerErrorException(`No se pudo crear el usuario - Revisa los logs`)
  }


}
