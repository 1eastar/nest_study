import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ConsoleLogger,
} from '@nestjs/common';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getHelloWorld(): string {
    return this.UserService.getHelloWorld();
  }

  @Post('/create_user')
  onCreateUser(@Body('id') id: number, @Body('name') name: string ): User[] {
    return this.UserService.onCreateUser(id, name)
  }

  @Get('/user_all')
  getAllUser(): User[] {
    return this.UserService.getAllUser()
  }

  @Get('/finduser')
  findUserById_QueryParam(@Query('id') id: number): User {
    return this.UserService.findUserById(id)
  }

  @Get('/finduser/:id')
  findUserById_URLParam(@Param('id') id: number): User {
    return this.UserService.findUserById(id)
  }

  @Patch('/patchuser/:id')
  SetUser(@Param('id') id: number, @Body('name') name: string): User {
    return this.UserService.setUser(id, name)
  }

  /**
   * @author Vive
   * @description Body 방식 - 전체 유저 수정
   *
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   */
  @Put('/update')
  setAllUser(@Body('id') id: number, @Body('name') name: string): User[] {
    return this.UserService.setAllUser(id, name);
  }

  /**
   * @author Ryan
   * @description Query 방식 - 단일 유저 삭제
   *
   * @param id 유저 고유 아이디
   */
  @Delete('/delete')
  deleteUser(@Query('id') id: number): User[] {
    return this.UserService.deleteUser(id);
  }
}
