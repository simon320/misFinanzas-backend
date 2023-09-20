import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';

@Injectable()
export class WalletService {

  constructor(
    @InjectModel( Wallet.name )
    private readonly walletModel: Model<Wallet>,
  ) {}

  
  async create(createWalletDto: CreateWalletDto) {
    try {
      await this.walletModel.create( createWalletDto );
      return createWalletDto;
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  
  async findAllById(id: string) {
    const allWallet: Wallet[] = await this.walletModel.find();
    
    let walletById: Wallet;
    walletById = allWallet.find( ( wallet ) => wallet.userId == id );

    return walletById;
  }

  async update(id: string, updateWalletDto: UpdateWalletDto) {
    const wallet: Wallet = await this.findAllById(id);
    
    return await this.walletModel.findByIdAndUpdate(wallet._id, updateWalletDto)
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`El usuario ya existe: ${ JSON.stringify( error.keyValue  )}`)
    }
    console.error(error);
    throw new InternalServerErrorException(`No se pudo crear el usuario - Revisar los logs`)
  }
}
