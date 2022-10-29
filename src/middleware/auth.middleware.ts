import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const name: string = req.query.name || req.body.name;

    // 이렇게 해두면 쿼리파람으로 ?name=Vive 만 넣어주면 모든 요청이 받아들여지기 때문에 
    // 세부적인 토큰 인증 등 과정이 들어가야 할 듯
    if(true) {
      next();
    } else {
      throw new UnauthorizedException();
    }
  }
}