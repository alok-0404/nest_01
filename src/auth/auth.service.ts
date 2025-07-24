import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [
    { id: 1, name: 'Alok', status: 'active' },
    { id: 2, name: 'Sharma', status: 'inactive' },
    { id: 3, name: 'Tech', status: 'active' },
  ];

  getAllUser() {
    return this.users;
  }

  getUserAuthById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
