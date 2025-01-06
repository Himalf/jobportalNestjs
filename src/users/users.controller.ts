import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ReturningStatementNotSupportedError } from 'typeorm';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('')
  async findAll() {
    return this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') user_id: number) {
    return this.usersService.findOne(user_id);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') user_id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(user_id, updateUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') user_id: number) {
    return this.usersService.remove(user_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':phone_number')
  async findByPhone(@Param('phone_number') phone_number: number) {
    return this.usersService.findByPhone(phone_number);
  }
}
