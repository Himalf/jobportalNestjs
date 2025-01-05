import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { App } from 'supertest/types';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}
  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    const user = await this.usersRepository.findOne({
      where: { user_id: createApplicationDto.user_id },
    });
    if (!user) {
      throw new Error('user id not found');
    }
    const jobs = await this.jobRepository.findOne({
      where: { job_id: createApplicationDto.job_id },
    });
    if (!jobs) {
      throw new Error('job id is not found');
    }
    const createApplication = this.applicationRepository.create({
      users: user,
      job: jobs,
      ...createApplicationDto,
    });
    return this.applicationRepository.save(createApplication);
  }

  async findAll(): Promise<Application[]> {
    return this.applicationRepository.find({ relations: ['users', 'job'] });
  }

  async findOne(application_id: number): Promise<Application> {
    return this.applicationRepository.findOne({
      where: { application_id },
      relations: ['users', 'job'],
    });
  }

  async update(
    application_id: number,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application> {
    const application = await this.applicationRepository.findOne({
      where: { application_id },
    });
    if (!application) {
      throw new Error('application id not found');
    }
    const user = await this.usersRepository.findOne({
      where: { user_id: updateApplicationDto.user_id },
    });
    if (!user) {
      throw new Error('user id not found');
    }
    const jobs = await this.jobRepository.findOne({
      where: { job_id: updateApplicationDto.job_id },
    });
    if (!jobs) {
      throw new Error('job id not found');
    }
    const updateApplication = this.applicationRepository.create({
      ...application,
      users: user,
      job: jobs,
      ...updateApplicationDto,
    });
    return this.applicationRepository.save(updateApplication);
  }

  async remove(application_id: number): Promise<DeleteResult> {
    return this.applicationRepository.delete(application_id);
  }
}
