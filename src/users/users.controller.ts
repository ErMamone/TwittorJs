import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body, Put, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { ParseObjectIdPipe } from '../utilities/parse-object-id-pipe.pipe';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    //@Redirect('https://nestjs.com', 301)
    create(@Body() user: CreateUserDto){
        return this.usersService.create(user);
    }

    @Get(':id')
    findOne(@Param('id', ParseObjectIdPipe) id: string) {
        return this.usersService.findOne(id);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Patch(':id')
    update( 
        @Param('id', ParseObjectIdPipe) id: string,
        @Body() createUserDto: CreateUserDto) {
      return this.usersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseObjectIdPipe) id: string) {
        return this.usersService.delete(id);
    } 
}
