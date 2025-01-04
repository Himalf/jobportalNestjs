import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateResumeDto {
  //   resume_id: number;
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
  @IsString()
  @IsNotEmpty()
  file_url: string;
}
export class UpdateResumeDto extends PartialType(CreateResumeDto) {}
