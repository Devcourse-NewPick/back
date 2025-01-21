import {
  Controller,
  Get,
  Delete,
  UseGuards,
  Param,
  Patch,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(AuthGuard('jwt')) // JWT 인증 적용
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  async getUsers() {
    return this.adminService.getAllUsers();
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: number) {
    return this.adminService.deleteUser(id);
  }

  @Get('bookmarks')
  async getBookmarks() {
    return this.adminService.getAllBookmarks();
  }

  /**
   * 사용자 정보 수정
   */
  @Patch('users/:id')
  async updateUser(
    @Param('id') id: string, // Param 값은 기본적으로 string으로 제공
    @Body() updateDto: { role?: string; status?: string },
  ) {
    const numericId = parseInt(id, 10); // id를 number로 변환
    if (isNaN(numericId)) {
      throw new Error('Invalid user ID'); // 숫자로 변환되지 않으면 예외 처리
    }
    return this.adminService.updateUser(numericId, updateDto);
  }
}
