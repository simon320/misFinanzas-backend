import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {

    @IsString()
    @MinLength(1)
    @MaxLength(25)
    nickname: string;

    @IsString()
    photo: string
}
