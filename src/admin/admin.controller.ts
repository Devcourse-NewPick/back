import { Controller, Get, Delete, UseGuards, Param } from '@nestjs/common';
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
}
