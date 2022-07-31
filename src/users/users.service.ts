import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import { User } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class UsersService{
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ){}

    async create(user: CreateUserDto): Promise<User>{
        console.log(user);
        return this.userModel.create(user);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User>{
        return this.userModel.findOne({_id: id}).exec();
    }

    async update(id: string, body: User): Promise<User> {
        return this.userModel.findOneAndUpdate({_id: id}, body, {
            new: true,
        });
    }

    async delete(id: string) {
        return this.userModel.findByIdAndRemove({_id: id}).exec();
    }

    /*
    aprender a implementar esto:
    async updateMany(id[]: string, body[]: User): Promise<User[]> {
        return this.userModel.updateMany(id, body);
    }
    */
}