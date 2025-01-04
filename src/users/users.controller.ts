import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ReturningStatementNotSupportedError } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get('')
  async findAll() {
    return this.usersService.finaAll();
  }
  @Get(':id')
  async findOne(@Param('id') user_id: number) {
    return this.usersService.findOne(user_id);
  }
  @Put(':id')
  async update(@Param('id') user_id: number, createUserDto: CreateUserDto) {
    return this.usersService.update(user_id, createUserDto);
  }
  @Delete(':id')
  async remove(@Param('id') user_id: number) {
    return this.usersService.remove(user_id);
  }
}
