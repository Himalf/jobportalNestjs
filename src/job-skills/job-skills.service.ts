import { Injectable } from '@nestjs/common';
import { CreateJobSkillDto } from './dto/create-job-skill.dto';
import { UpdateJobSkillDto } from './dto/update-job-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobSkill } from './entities/job-skill.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { Skills } from 'src/skills/skills.entity';
import { Repository } from 'typeorm';
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

  findAll() {
    return `This action returns all jobSkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobSkill`;
  }

  update(id: number, updateJobSkillDto: UpdateJobSkillDto) {
    return `This action updates a #${id} jobSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobSkill`;
  }
}
