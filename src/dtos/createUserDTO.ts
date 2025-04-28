import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsDateString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name?: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  password?: string;

  @IsDateString({}, { message: 'Data de nascimento inválida' })
  @IsOptional()
  birthDate?: string; 
}
