import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  @IsNotEmpty()
  file_url: string;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
