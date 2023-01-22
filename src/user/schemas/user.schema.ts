import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    fisrt_name: string;

    @Prop()
    last_name: string;

    @Prop()
    user_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop([Object])
    favorites: Array<any>;

    @Prop()
    address: string;

    @Prop([Object])
    badges: Array<any>;

    @Prop([Object])
    subscriptions_list: Array<any>;

    @Prop([Object])
    notifications_list: Array<any>;

    @Prop([Object])
    groups: Array<any>;

}

export const UserSchema = SchemaFactory.createForClass(User);