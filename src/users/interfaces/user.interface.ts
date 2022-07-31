import { Document } from 'mongoose';

export interface User extends Document{
    _id: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    email: string;
    password: string;
    avatar: string;
    banner: string;
    biografia: string;
    ubicacion: string;
    sitioWeb: string;
}