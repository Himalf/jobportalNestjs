import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto, UpdateResumeDto } from './dto/resume.dto';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  // @UseGuards(JwtAuthGuard)
  @Post('')
  async create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }
  // @UseGuards(JwtAuthGuard)
  @Get('')
  async findAll() {
    return this.resumeService.findAll();
  }
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param() id: number) {
    return this.resumeService.findOne(id);
  }
  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Body() updateResumeDto: UpdateResumeDto,
    @Param('id') id: number,
  ) {
    return this.resumeService.update(id, updateResumeDto);
  }
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.resumeService.remove(id);
  }
}
