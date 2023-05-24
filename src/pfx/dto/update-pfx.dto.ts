import { PartialType } from '@nestjs/mapped-types';
import { CreatePfxDto } from './create-pfx.dto';

export class UpdatePfxDto extends PartialType(CreatePfxDto) {}
