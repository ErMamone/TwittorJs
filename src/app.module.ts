import { Module } from '@nestjs/common';
import { UsersModules } from './users/users.module';

@Module({
  imports: [UsersModules]
})
export class AppModule {}
