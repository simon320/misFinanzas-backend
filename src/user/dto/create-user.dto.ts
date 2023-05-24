import { IsString, MinLength } from "class-validator";


export class CreateUserDto {
    @IsString()
    @MinLength(1)
    mail: string;

    @IsString()
    @MinLength(1)
    nickname: string;

    @IsString()
    password: string;

    @IsString()
    photo: string
}
