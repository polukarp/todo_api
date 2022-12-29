import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
    if (!authorizationHeader) {
      return false;
    }
    const [bearer, token] = authorizationHeader.replaceAll(`"`, '').split(' ');
    if (bearer !== 'Bearer') {
      return false;
    }
    try {
      const decoded = verify(token, process.env.JWT_SECRET);
      request.user = decoded;
      return true;
    } catch (error) {
      return false;
    }
  }
}
