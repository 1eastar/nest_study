import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  
  login() {
    return 'login service LOGIN'
  }
}
