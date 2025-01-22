import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 사용자 등록
  @Post('register')
  async registerUser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('username') username: string,
  ) {
    return this.userService.registerUser(email, password, username);
  }

  // 특정 사용자 조회
  @Get('users/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  // 전체 사용자 조회
  @Get('users')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
