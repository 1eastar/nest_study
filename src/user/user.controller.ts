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
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';

import { UserService } from './user.service'
import {
  CreateUserDto,
  UpdateUserDto,
  FindUserDto,
  DeleteUserDto,
} from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getHelloWorld(): string {
    return this.UserService.getHelloWorld();
  }

  @Post('/create_user')
  @UsePipes(ValidationPipe)
  onCreateUser(@Body() createUserDto: CreateUserDto): User[] {
    return this.UserService.onCreateUser(createUserDto)
  }
  // onCreateUser(@Body('id') id: number, @Body('name') name: string): User[] {
  //   return this.UserService.onCreateUser(id, name)
  // }


  @Get('/user_all')
  getAllUser(): User[] {
    return this.UserService.getAllUser()
  }

  @Get('/finduser')
  findUserById_QueryParam(@Query() findUserDto: FindUserDto): User {
    return this.UserService.findUserById(findUserDto)
  }

  @Get('/finduser/:id')
  findUserById_URLParam(@Param() findUSerDto: FindUserDto): User {
    return this.UserService.findUserById(findUSerDto)
  }

  @Patch('/patchuser/:id')
  @UsePipes(ValidationPipe)
  setUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): User {
    console.log(id, updateUserDto)
    return this.UserService.setUser(id, updateUserDto)
  }
  // SetUser(@Param('id') id: number, @Body('name') name: string): User {
  //   return this.UserService.setUser(id, name)
  // }


  /**
   * @author Vive
   * @description Body 방식 - 전체 유저 수정
   *
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   */
  @Put('/update')
  @UsePipes(ValidationPipe)
  setAllUser(@Body() updateUserDto: UpdateUserDto): User[] {
    return this.UserService.setAllUser(updateUserDto);
  }
  // setAllUser(@Body('id') id: number, @Body('name') name: string): User[] {
  //   return this.UserService.setAllUser(id, name);
  // }


  /**
   * @author Vive
   * @description Query 방식 - 단일 유저 삭제
   *
   * @param DeleteUserDto 유저 고유 아이디
   */
  @Delete('/delete')
  deleteUser(@Query() deleteUserDto: DeleteUserDto): User[] {
    return this.UserService.deleteUser(deleteUserDto);
  }
}
