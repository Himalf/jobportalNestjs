import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User_Skill } from './entities/user_skills.entity';
import { Users } from 'src/users/entities/user.entity';
import { Skills } from 'src/skills/skills.entity';
import {
  CreateUserSkillsDto,
  updateUserSkillsDto,
} from './dto/user_skills.dto';

@Injectable()
export class UserSkillsService {
  constructor(
    @InjectRepository(User_Skill)
    private readonly userSkillRepository: Repository<User_Skill>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createUserSkillsDto: CreateUserSkillsDto): Promise<User_Skill> {
    const user = await this.userRepository.findOne({
      where: { user_id: createUserSkillsDto.user_id },
    });
    if (!user) {
      throw new NotFoundException('Users not found');
    }
    const userSkillData = this.userSkillRepository.create({
      users: user,
      ...createUserSkillsDto,
    });
    return this.userSkillRepository.save(userSkillData);
  }

  async findAll(): Promise<User_Skill[]> {
    return this.userSkillRepository.find({ relations: ['users', 'skills'] });
  }
  async findOne(user_skill_id: number): Promise<User_Skill> {
    return this.userSkillRepository.findOne({
      where: { user_skill_id },
      relations: ['users', 'skills'],
    });
  }

  async remove(user_skill_id: number): Promise<DeleteResult> {
    return this.userSkillRepository.delete(user_skill_id);
  }
}
