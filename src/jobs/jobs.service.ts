import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(createJobDto: CreateJobDto): Promise<Job> {
    console.log(createJobDto);
    const user = await this.userRepository.findOne({
      where: { user_id: createJobDto.user_id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const jobData = this.jobRepository.create({
      ...createJobDto,
      users: user,
    });
    return this.jobRepository.save(jobData);
  }

  findAll(): Promise<Job[]> {
    return this.jobRepository.find({ relations: ['users'] });
  }

  findOne(job_id: number): Promise<Job> {
    return this.jobRepository.findOne({
      where: { job_id },
      relations: ['users'],
    });
  }

  async update(job_id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { job_id } });
    if (!job) {
      throw new Error('job id is invalid');
    }
    const user = await this.userRepository.findOne({
      where: { user_id: updateJobDto.user_id },
    });
    if (!user) {
      throw new Error('User id not found');
    }
    const upadateJobData = this.jobRepository.create({
      ...job,
      ...updateJobDto,
      users: user,
    });
    return this.jobRepository.save(upadateJobData);
  }

  remove(job_id: number): Promise<DeleteResult> {
    return this.jobRepository.delete(job_id);
  }
}
