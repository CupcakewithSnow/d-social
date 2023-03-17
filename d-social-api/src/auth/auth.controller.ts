import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthRequestDto, AuthResponseDto } from './auth.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @ApiResponse({ description: 'Users', type: AuthResponseDto })
  @Post('auth-try')
  async auth(@Body() request: AuthRequestDto): Promise<AuthResponseDto> {
    if (request) {
      return { token: 'token123321' };
    }
  }
}
