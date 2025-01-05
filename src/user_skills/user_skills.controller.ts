import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserSkillsService } from './user_skills.service';
import {
  CreateUserSkillsDto,
  updateUserSkillsDto,
} from './dto/user_skills.dto';

@Controller('user_skills')
export class UserSkillsController {
  constructor(private readonly userSkillsService: UserSkillsService) {}
  @Post('')
  async create(@Body() createUserSkillsDto: CreateUserSkillsDto) {
    return this.userSkillsService.create(createUserSkillsDto);
  }
  @Get('')
  async findAll() {
    return this.userSkillsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userSkillsService.findOne(id);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userSkillsService.remove(id);
  }
}
