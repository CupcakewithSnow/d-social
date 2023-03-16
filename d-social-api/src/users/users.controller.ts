import { ApiTags } from '@nestjs/swagger/dist';
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('get-user')
  getUser() {
    return this.userService.getUser();
  }
}
