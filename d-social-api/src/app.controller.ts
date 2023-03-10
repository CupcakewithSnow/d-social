import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { AppService } from './app.service';

@ApiTags('Users')
@Controller('Users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Get-user')
  getHello() {
    return this.appService.getHello();
  }
}
