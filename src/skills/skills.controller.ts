import { Body, Controller, Get, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/skills.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}
  @Post('')
  async create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }
  @Get('')
  async findAll() {
    return this.skillsService.findAll();
  }
  @Get(':id')
  async findOne(skill_id: number) {
    return this.skillsService.findOne(skill_id);
  }
}
