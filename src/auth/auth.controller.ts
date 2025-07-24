import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Get()
  getAllAuth() {
    return this.authservice.getAllUser();
  }

  @Get(':id')
  getAllAuthById(@Param('id') id: string) {
    return this.authservice.getUserAuthById(Number(id));
  }
}
