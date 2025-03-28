import { IsEmail, IsNotEmpty, Length  } from "@nestjs/class-validator";
export class CreateAutorDto {

    @IsNotEmpty()
    @Length(1,255)
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(1,255)
    id_endereco: string;

}