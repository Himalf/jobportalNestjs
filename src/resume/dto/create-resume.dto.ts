import { IsNumber, IsString } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  file_url: string;
  @IsNumber()
  user_id: number;
}
