import { Body, Controller, Post } from '@nestjs/common';
import { UserSkillsService } from './user_skills.service';
import { CreateUserSkillsDto } from './dto/user_skills.dto';

@Controller('user_skills')
export class UserSkillsController {
  constructor(private readonly userSkillsService: UserSkillsService) {}
  @Post('')
  async create(@Body() createUserSkillsDto: CreateUserSkillsDto) {
    return this.userSkillsService.create(createUserSkillsDto);
  }
}
