import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto, UpdateResumeDto } from './dto/resume.dto';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  @Post('')
  async create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }
  @Get('')
  async findAll() {
    return this.resumeService.findAll();
  }
  @Get(':id')
  async findOne(@Param() id: number) {
    return this.resumeService.findOne(id);
  }
  @Put(':id')
  async update(
    @Body() updateResumeDto: UpdateResumeDto,
    @Param('id') id: number,
  ) {
    return this.resumeService.update(id, updateResumeDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.resumeService.remove(id);
  }
}
