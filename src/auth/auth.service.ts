import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  //signup logic here, with jwt token generation
  async signup(data) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }
}
