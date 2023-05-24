import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Pfx } from 'src/pfx/entities/pfx.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectModel( User.name )
    private readonly userModel: Model<User>,

    @InjectModel( Pfx.name )
    private readonly pfxModel: Model<Pfx>,
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

      await this.pfxModel.create( pxf );
      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return await this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
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
