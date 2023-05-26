import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class User extends Document {

    @Prop({ unique: true, index: true, required: true })
    mail: string;

    @Prop({ required: true })
    nickname: string;
    
    @Prop({ required: true })
    password: string;

    @Prop()
    photo: string;

}

export const UserSchema = SchemaFactory.createForClass( User );