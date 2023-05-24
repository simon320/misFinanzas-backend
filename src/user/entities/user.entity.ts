import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class User extends Document {

    @Prop({ unique: true, index: true })
    mail: string;

    @Prop()
    nickname: string;

    @Prop()
    password: string;

    @Prop()
    photo: string

}

export const UserSchema = SchemaFactory.createForClass( User );