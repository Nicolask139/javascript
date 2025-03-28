import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnderecoModule } from './endereco/endereco.module';
import { LivroModule } from './livro/livro.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [ EnderecoModule, LivroModule, AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
