import { IsEnum, IsNumber, IsString } from 'class-validator';
import { employeeType } from './employee_type.enum';
import { Status } from './status.enum';
export class CreateJobDto {
  @IsNumber()
  user_id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  location: string;
  @IsEnum(employeeType)
  employement_type: employeeType;
  @IsString()
  salary_range: string;
  @IsString()
  application_deadline: string;
  @IsEnum(Status)
  status: Status;
}
