import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto, UpdateSkillDto } from './dto/skills.dto';
import { BSON } from 'typeorm';

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
  @Patch(':id')
  async update(
    @Body() updateSkillDto: UpdateSkillDto,
    @Param('id') skill_id: number,
  ) {
    return this.skillsService.update(skill_id, updateSkillDto);
  }
  @Delete(':id')
  async remove(@Param('id') skill_id: number) {
    return this.skillsService.remove(skill_id);
  }
}
