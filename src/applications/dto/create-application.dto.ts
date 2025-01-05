import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ApplicationStatus } from './application-status.enum';

export class CreateApplicationDto {
  @IsNumber()
  user_id: number;
  @IsNumber()
  job_id: number;
  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;
}
