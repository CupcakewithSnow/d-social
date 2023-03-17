import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class AuthRequestDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  password: string;
}

export class AuthResponseDto {
  @ApiProperty()
  token: string;
}
