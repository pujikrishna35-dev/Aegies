import { Controller, Post, Get, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('logout')
  async logout() {
    return { success: true, message: 'Logged out successfully' };
  }

  @Get('me')
  async getProfile(@Headers('authorization') authHeader: string) {
    const token = authHeader ? authHeader.replace('Bearer ', '') : '';
    const user = await this.authService.getProfile(token);
    if (!user) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    return { success: true, user };
  }
}
