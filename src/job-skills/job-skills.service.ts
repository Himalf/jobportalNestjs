import { Injectable } from '@nestjs/common';
import { CreateJobSkillDto } from './dto/create-job-skill.dto';
import { UpdateJobSkillDto } from './dto/update-job-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobSkill } from './entities/job-skill.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { Skills } from 'src/skills/skills.entity';
import { DeleteResult, Repository } from 'typeorm';
import { privateDecrypt } from 'crypto';

@Injectable()
export class JobSkillsService {
  constructor(
    @InjectRepository(JobSkill)
    private readonly jodSkillRepository: Repository<JobSkill>,
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    @InjectRepository(Skills)
    private readonly skillsRepository: Repository<Skills>,
  ) {}
  async create(createJobSkillDto: CreateJobSkillDto): Promise<JobSkill> {
    const jobs = await this.jobRepository.findOne({
      where: { job_id: createJobSkillDto.job_id },
    });
    if (!jobs) {
      throw new Error('The job id is not found');
    }
    const skill = await this.skillsRepository.findOne({
      where: { skill_id: createJobSkillDto.skill_id },
    });
    if (!skill) {
      throw new Error('The skill id is not found');
    }
    const jobskillData = this.jodSkillRepository.create({
      job: jobs,
      skills: skill,
      ...createJobSkillDto,
    });
    return this.jodSkillRepository.save(jobskillData);
  }

  findAll(): Promise<JobSkill[]> {
    return this.jodSkillRepository.find({
      relations: ['job', 'skills'],
    });
  }

  findOne(job_skill_id: number): Promise<JobSkill> {
    return this.jodSkillRepository.findOne({
      where: { job_skill_id },
      relations: ['job', 'skills'],
    });
  }

  async update(
    job_skill_id: number,
    updateJobSkillDto: UpdateJobSkillDto,
  ): Promise<JobSkill> {
    const jobSkill = await this.jodSkillRepository.findOne({
      where: { job_skill_id },
    });
    if (!jobSkill) {
      throw new Error('The job Skill id is not found');
    }
    const jobs = await this.jobRepository.findOne({
      where: { job_id: updateJobSkillDto.job_id },
    });
    if (!jobs) {
      throw new Error('The job id is not found');
    }
    const skill = await this.skillsRepository.findOne({
      where: { skill_id: updateJobSkillDto.skill_id },
    });
    if (!skill) {
      throw new Error('The skill is not found');
    }
    const updateUserSkillData = this.jodSkillRepository.create({
      ...jobSkill,
      ...updateJobSkillDto,
      job: jobs,
      skills: skill,
    });
    return this.jodSkillRepository.save(updateUserSkillData);
  }

  remove(job_skill_id: number): Promise<DeleteResult> {
    return this.jodSkillRepository.delete(job_skill_id);
  }
}
