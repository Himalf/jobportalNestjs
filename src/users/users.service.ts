import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const password = createUserDto.password;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    createUserDto.password = hash;
    const userData = this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
  async findOne(user_id: number): Promise<Users> {
    return this.userRepository.findOneBy({ user_id });
  }
  async update(user_id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const existingUser = await this.findOne(user_id);
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }
    const userData = this.userRepository.merge(existingUser, updateUserDto);
    return this.userRepository.save(userData);
  }
  async remove(user_id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(user_id);
  }
}
