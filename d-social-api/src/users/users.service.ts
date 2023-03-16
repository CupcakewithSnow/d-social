import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getUser(): { user: string } {
    return { user: 'Danil' };
  }
}
