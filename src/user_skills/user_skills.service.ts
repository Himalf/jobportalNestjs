import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User_Skill } from './entities/user_skills.entity';
import { Users } from 'src/users/entities/user.entity';
import { Skills } from 'src/skills/skills.entity';
import { CreateUserSkillsDto } from './dto/user_skills.dto';

@Injectable()
export class UserSkillsService {
  constructor(
    @InjectRepository(User_Skill)
    private readonly userSkillRepository: Repository<User_Skill>,
  ) {}

  async create(createUserSkillsDto: CreateUserSkillsDto): Promise<User_Skill> {
    const { user_id, skill_id } = createUserSkillsDto;

    // Find the user
    const user = await this.userSkillRepository.manager.findOne(Users, {
      where: { user_id },
    });
    if (!user) throw new NotFoundException(`User with ID ${user_id} not found`);

    // Find the skill
    const skill = await this.userSkillRepository.manager.findOne(Skills, {
      where: { skill_id },
    });
    if (!skill)
      throw new NotFoundException(`Skill with ID ${skill_id} not found`);

    // Create and save the user skill
    const userSkill = this.userSkillRepository.create({
      users: user,
      skills: skill,
    });
    return this.userSkillRepository.save(userSkill);
  }

  async findAll() {
    return this.userSkillRepository.find({ relations: ['users', 'skills'] });
  }
}
