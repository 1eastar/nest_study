import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service'

@Controller('login')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {}

  @Get()
  login() {
    return this.LoginService.login()
  }
}