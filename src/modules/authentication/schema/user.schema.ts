import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class User{

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    mobile: number;

    @Prop()
    password: string;

    @Prop()
    emailOtp: number;

    @Prop()
    status: string;

}

export const userSchema =  SchemaFactory.createForClass(User)