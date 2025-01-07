import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Resume } from './entities/resume.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResumeDto, UpdateResumeDto } from './dto/resume.dto';
import { Users } from 'src/users/entities/user.entity';
@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resumeRepository: Repository<Resume>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    const user = await this.userRepository.findOneBy({
      user_id: createResumeDto.user_id,
    });
    if (!user) {
      throw new NotFoundException(
        `User with ID ${createResumeDto.user_id} not found`,
      );
    }

    const resume = this.resumeRepository.create({
      ...createResumeDto,
      user,
    });

    return this.resumeRepository.save(resume);
  }

  async findAll(): Promise<Resume[]> {
    return this.resumeRepository.find({ relations: ['user'] });
  }
  async findOne(resume_id: number): Promise<Resume> {
    return this.resumeRepository.findOne({
      where: { resume_id },
      relations: ['user'],
    });
  }
  async update(
    resume_id: number,
    updateResumeDto: UpdateResumeDto,
  ): Promise<Resume> {
    const resume = await this.resumeRepository.findOne({
      where: { resume_id },
    });
    if (!resume) {
      throw new NotFoundException('resume id not found');
    }
    const users = await this.userRepository.findOne({
      where: { user_id: updateResumeDto.user_id },
    });
    const updateResumeData = this.resumeRepository.create({
      user: users,
      ...resume,
      ...updateResumeDto,
    });
    return this.resumeRepository.save(updateResumeData);
  }
  async remove(resume_id: number): Promise<DeleteResult> {
    return this.resumeRepository.delete(resume_id);
  }
}
