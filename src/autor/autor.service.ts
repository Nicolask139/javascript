import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AutorService {

  constructor (private readonly prisma: PrismaService){}
  async create(createAutorDto: CreateAutorDto) {
    return await this.prisma.autor.create({
      data: createAutorDto, 
    });
  }

  async findAll() {
    return this.prisma.autor.findMany();
  }

  async findOne(id: number) {
    return this.prisma.autor.findUnique({
      where: { id },
  });
}

  async update(id: number, updateAutorDto: UpdateAutorDto) {
    return this.prisma.autor.update({
      where: { id }, 
      data: updateAutorDto, 
    });
  }

  async remove(id: number) {
    return this.prisma.autor.delete({
      where: { id }, 
    });
  }
}