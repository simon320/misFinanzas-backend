import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { DescriptionDay, ForeignCurrency } from "src/common/interfaces/interface";


export class CreatePfxDto {
    @IsString()
    userId: string;

    @IsInt()
    money_acount: number;

    @IsNotEmpty()
    money_saved: ForeignCurrency[]

    @IsInt()
    money_per_day: number;

    @IsString()
    start_selected_day: string;

    @IsString()
    end_selected_day: string;

    @IsNotEmpty()
    days: DescriptionDay[]
}
