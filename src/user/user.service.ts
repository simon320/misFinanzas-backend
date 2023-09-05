import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { IsBoolean } from 'class-validator';


@Injectable()
export class UserService {

  constructor(
    @InjectModel( User.name )
    private readonly userModel: Model<User>,

    @InjectModel( Wallet.name )
    private readonly walletModel: Model<Wallet>,
  ) {}

  async create(createUserDto: CreateUserDto) {

    try {
      const user = await this.userModel.create( createUserDto );
      const pxf = {
        userId: user._id,
        money_acount: 0,
        money_saved: [],
        money_per_day: 0,
        start_selected_day: '',
        end_selected_day: '',
        days: []
      }

      await this.walletModel.create( pxf );
      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }



  async findAll() {
    return await this.userModel.find();
  }



  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id});
  }



  async setFirstLogin(id: string) {
    let user = await this.userModel.findOne({ _id: id});

    user.first = false;

    return await this.userModel.updateOne( { _id: id }, user );
  }



  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.userModel.updateOne( { _id: id }, updateUserDto )

      return { 
        _id: id,
        ...UpdateUserDto 
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  
  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`El usuario ya existe: ${ JSON.stringify( error.keyValue  )}`)
    }
    console.error(error);
    throw new InternalServerErrorException(`No se pudo crear el usuario - Revisar los logs`)
  }
}
