import { Injectable } from '@nestjs/common';

const dummyUsers: User[] = [
  { id: 1, name: '유저1' },
  { id: 2, name: '유저2' },
  { id: 3, name: '유저3' },
]

@Injectable()
export class UserService {
  /**
   * @author Vive
   * @description 유저 생성
   *
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   * @returns {User[]} users
   */
  onCreateUser(id: number, name: string): User[] {
    return dummyUsers.concat({ id, name })
  }

  /**
   * @author Vive
   * @description 전체 유저 조회
   * 
   * @returns {User[]} users
   */
  getAllUser(): User[] {
    return dummyUsers;
  }

  /**
   * @author Vive
   * @description 유저 아이디로 단일 유저 조회
   * 
   * @param id 유저 고유 아이디
   */
  findUserById(id: number): User {
    return dummyUsers.find((u: User) => u.id == id)
  }

  /**
   * @author Vive
   * @description 아이디로 유저 찾고 이름 변경
   * 
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   * @returns {User} user
   */
  setUser(id: number, name: string): User {
    return dummyUsers.find((u: User) => {
      if(u.id == id) return u.name = name
    })
  }

  /**
   * @author Vive
   * @description 전체 유저 수정
   *
   * @returns {User[]} users
   */
  setAllUser(id, name): User[] {
    return dummyUsers.map((u: User) => {
      if (u.id == id) {
        u.name = name;
      }

      return {
        id: u.id,
        name: u.name,
      };
    });
  }

  /**
   * @author Vive
   * @description 유저 삭제
   *
   * @param id 유저 고유 아이디
   * @returns {User[]} users
   */
  deleteUser(id: number): User[] {
    return dummyUsers.filter((u: User) => u.id != id);
  }

  getHelloWorld(): string {
    return 'Hello World!!';
  }
}
