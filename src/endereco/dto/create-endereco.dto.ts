import { IsNotEmpty, Length  } from "@nestjs/class-validator";

export class CreateEnderecoDto {

    @IsNotEmpty()
    @Length(1,255)
    cep: string;

    @IsNotEmpty()
    @Length(1,255)
    cidade: string;

    @IsNotEmpty()
    @Length(1,255)
    logradouro: string;

    @IsNotEmpty()
    @Length(1,255)
    bairro: string;

    @IsNotEmpty()
    @Length(1,255)
    numero: string;

    @IsNotEmpty()
    @Length(1,255)
    complemento: string;
}

