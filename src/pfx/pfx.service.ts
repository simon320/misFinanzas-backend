import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePfxDto } from './dto/create-pfx.dto';
import { UpdatePfxDto } from './dto/update-pfx.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pfx } from './entities/pfx.entity';
import { Model } from 'mongoose';

@Injectable()
export class PfxService {

  constructor(
    @InjectModel( Pfx.name )
    private readonly pfxModel: Model<Pfx>,
  ) {}

  async create(createPfxDto: CreatePfxDto) {

    try {
      await this.pfxModel.create( createPfxDto );
      return createPfxDto;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return await this.pfxModel.find();
  }
  
  async findAllById(id: string) {
    const allPfx: Pfx[] = await this.findAll();
    
    let pfxById: Pfx[] = [];
    pfxById = allPfx.filter( ( pxf ) => pxf.userId == id );

    return pfxById;
  }

  update(id: string, updatePfxDto: UpdatePfxDto) {
    return `This action updates a #${id} pfx`;
  }

  remove(id: string) {
    return `This action removes a #${id} pfx`;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`El usuario ya existe: ${ JSON.stringify( error.keyValue  )}`)
    }
    console.error(error);
    throw new InternalServerErrorException(`No se pudo crear el usuario - Revisar los logs`)
  }
}
