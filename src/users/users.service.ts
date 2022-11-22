import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'marko',
      userName: 'maki',
      password: 'pass1',
    },
    {
      id: 2,
      name: 'sasa',
      userName: 'sale',
      password: 'pass1',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === userName);
  }
}
