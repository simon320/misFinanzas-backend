import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PfxService } from './pfx.service';
import { CreatePfxDto } from './dto/create-pfx.dto';
import { UpdatePfxDto } from './dto/update-pfx.dto';

@Controller('pfx')
export class PfxController {
  constructor(private readonly pfxService: PfxService) {}

  @Post()
  create(@Body() createPfxDto: CreatePfxDto) {
    return this.pfxService.create(createPfxDto);
  }

  @Get()
  findAll() {
    return this.pfxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pfxService.findAllById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePfxDto: UpdatePfxDto) {
    return this.pfxService.update(id, updatePfxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pfxService.remove(id);
  }
}
