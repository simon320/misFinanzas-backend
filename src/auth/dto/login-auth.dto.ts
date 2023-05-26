import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    mail: string;

    @IsString()
    @MinLength(8)
    @MaxLength(8)
    password: string;
}
