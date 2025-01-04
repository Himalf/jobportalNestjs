import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
  findAll(): any[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      {
        id: 3,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    ];
  }
}
