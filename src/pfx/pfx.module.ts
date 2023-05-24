import { Module } from '@nestjs/common';
import { PfxService } from './pfx.service';
import { PfxController } from './pfx.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pfx, PfxSchema } from './entities/pfx.entity';


@Module({
  controllers: [PfxController],
  providers: [PfxService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pfx.name,
        schema: PfxSchema,
      }
    ])
  ]
})
export class PfxModule {}
