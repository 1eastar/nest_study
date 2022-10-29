//DTO : Data Transfer Object

import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { PartialType } from '@nestjs/mapped-types'

export class CreateUserDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FindUserDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

export class DeleteUserDto extends PartialType(FindUserDto) {}
