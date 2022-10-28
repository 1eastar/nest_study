//DTO : Data Transfer Object

import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
