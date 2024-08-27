import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getPrueba() {
    return 'Prueba';
  }
}
