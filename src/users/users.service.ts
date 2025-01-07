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

  // to create user data
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const password = createUserDto.password;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    createUserDto.password = hash;
    const userData = this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  // to get all users data
  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  // to get single user data
  async findOne(user_id: number): Promise<Users> {
    return this.userRepository.findOneBy({ user_id });
  }

  // to update a user based on user_id
  async update(user_id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const existingUser = await this.findOne(user_id);
    if (!existingUser) {
      throw new NotFoundException('The user id is not found');
    }
    const updateUserData = this.userRepository.create({
      ...updateUserDto,
      ...existingUser,
    });
    return this.userRepository.save(updateUserData);
  }

  // to remove or delete user data by user_id
  async remove(user_id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(user_id);
  }

  // to find by phone number
  async findByPhone(phone_number: number): Promise<Users> {
    return this.userRepository.findOne({ where: { phone_number } });
  }
}
