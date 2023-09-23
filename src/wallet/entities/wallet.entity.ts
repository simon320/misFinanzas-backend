import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DescriptionDay, ForeignCurrency, Movement } from "src/common/interfaces/interface";

@Schema()
export class Wallet extends Document {
    @Prop()
    userId: string;
    
    @Prop()
    money_acount: number;

    @Prop()
    money_saved: ForeignCurrency[]

    @Prop() 
    money_per_day: number;

    @Prop() 
    start_selected_day: string;

    @Prop() 
    end_selected_day: string;

    @Prop() 
    movement: Movement[];

    @Prop()
    days: DescriptionDay[]
}

export const WalletSchema = SchemaFactory.createForClass( Wallet );