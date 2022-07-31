import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User{
    @Prop()
    _id: String;

    @Prop()
    nombre: String;
    @Prop()
    apellid: String;
    @Prop()
    fechaNacimiento: Date;
    @Prop()
    email: String;
    @Prop()
    password: String;
    @Prop()
    avatar: String;
    @Prop()
    banner: String;
    @Prop()
    biografia: String;
    @Prop()
    ubicacion: String;
    @Prop()
    sitioWeb: String;
};

export const UserSchema = SchemaFactory.createForClass(User);