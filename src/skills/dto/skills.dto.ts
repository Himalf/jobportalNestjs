import { IsString } from 'class-validator';

export class createSkillDto {
  @IsString()
  name: string;
}
