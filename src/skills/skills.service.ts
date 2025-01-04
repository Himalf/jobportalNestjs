import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skills } from './skills.entity';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/skills.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skills)
    private readonly skillsRepository: Repository<Skills>,
  ) {}
  async create(createSkillDto: CreateSkillDto): Promise<Skills> {
    const skillsData = this.skillsRepository.create(createSkillDto);
    return this.skillsRepository.save(skillsData);
  }
  async findAll(): Promise<Skills[]> {
    return this.skillsRepository.find();
  }

  async findOne(skill_id: number): Promise<Skills> {
    return this.skillsRepository.findOneBy({ skill_id });
  }
}
