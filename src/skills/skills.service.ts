import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skills } from './skills.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateSkillDto, UpdateSkillDto } from './dto/skills.dto';

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
  async update(
    skill_id: number,
    updateSkillDto: UpdateSkillDto,
  ): Promise<Skills> {
    const skill = await this.skillsRepository.findOne({ where: { skill_id } });
    if (!skill) {
      throw new NotFoundException('skill_id not found');
    }
    const updateSkillData = this.skillsRepository.create({
      ...skill,
      ...updateSkillDto,
    });
    return this.skillsRepository.save(updateSkillData);
  }

  async remove(skill_id): Promise<DeleteResult> {
    return this.skillsRepository.delete(skill_id);
  }
}
