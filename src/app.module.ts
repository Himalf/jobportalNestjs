import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Skills } from './skills/skills.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [Skills, Users],
      synchronize: true,
    }),
    SkillsModule,
    UsersModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
