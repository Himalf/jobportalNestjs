import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: Repository<Users>) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const userData = this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  async finaAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
  async findOne(user_id: number): Promise<Users> {
    return this.userRepository.findOneBy({ user_id });
  }
  async update(user_id: number, updateUserDto: CreateUserDto): Promise<Users> {
    const existingUser = await this.findOne(user_id);
    const userData = this.userRepository.merge(existingUser, updateUserDto);
    return this.userRepository.save(userData);
  }
  async remove(user_id: number): Promise<void> {
    await this.userRepository.delete(user_id);
  }
}
