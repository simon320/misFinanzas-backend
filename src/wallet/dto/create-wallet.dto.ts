import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { DescriptionDay, ForeignCurrency, Movement } from "src/common/interfaces/interface";


export class CreateWalletDto {
    @IsString()
    userId: string;

    @IsInt()
    money_acount: number;

    @IsNotEmpty()
    money_saved: ForeignCurrency[] | 0

    @IsInt()
    money_per_day: number;

    @IsString()
    start_selected_day: string;

    @IsString()
    end_selected_day: string;

    @IsNotEmpty()
    movement: Movement[]

    @IsNotEmpty()
    days: DescriptionDay[]
}
