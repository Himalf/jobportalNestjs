import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
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
    console.log('Existing User:', existingUser);
    console.log('Update User DTO:', updateUserDto);
    const userData = this.userRepository.merge(existingUser, updateUserDto);
    console.log('Merged User Data:', userData);
    return this.userRepository.save(userData);
  }
  async remove(user_id: number): Promise<void> {
    await this.userRepository.delete(user_id);
  }
}
