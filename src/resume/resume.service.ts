import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly resumeRepository: Repository<Resume>,
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
    return this.resumeRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} resume`;
  }

  async update(id: number, updateResumeDto: UpdateResumeDto) {
    return `This action updates a #${id} resume`;
  }

  async remove(id: number) {
    return `This action removes a #${id} resume`;
  }
}
