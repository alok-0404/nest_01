import { Injectable, CanActivate, ExecutionContext, Header } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorater';
import { Role } from './roles.enum';
import { stringify } from 'querystring';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),  //gethandler ka metadata nikal kr lata hai
      context.getClass(), //classs ke andr ka metadata lata hai
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<{headers: Record<string, string>}>();
    const userRole = request.headers['x-ser-role'] as Role;
    return requiredRoles.includes(userRole)
    return true
  }
}
