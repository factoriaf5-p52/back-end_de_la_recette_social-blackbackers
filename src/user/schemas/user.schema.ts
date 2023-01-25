import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class Favorites{
    @Prop()
    _id: string; 
}

@Schema()
export class Badges{
    @Prop()
    name: string;
}


@Schema()
export class Notification_list{
    @Prop()
    name: string;
}

@Schema()
export class Groups{
    @Prop()
    name: string;
}

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
    favorites: Array<Favorites>;

    @Prop()
    address: string;

    @Prop([Object])
    badges: Array<Badges>;

    @Prop([Object])
    notifications_list: Array<Notification_list>;

    @Prop([Object])
    groups: Array<Groups>;

}

export const UserSchema = SchemaFactory.createForClass(User);