import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware'
import { UserController } from './user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([]), AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/create_user', method: RequestMethod.POST })
      .exclude({ path: 'user/user_all', method: RequestMethod.GET })
      .forRoutes(UserController)
  }
}
