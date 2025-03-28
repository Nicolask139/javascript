import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [AuthService, UsuarioService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}