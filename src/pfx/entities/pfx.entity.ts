import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DescriptionDay, ForeignCurrency } from "src/common/interfaces/interface";

@Schema()
export class Pfx extends Document {
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
    days: DescriptionDay[]
}

export const PfxSchema = SchemaFactory.createForClass( Pfx );