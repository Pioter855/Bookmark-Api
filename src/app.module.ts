import { Module } from '@nestjs/common';
import { AuthMoodule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthMoodule, 
    UserModule, 
    BookmarkModule, 
    PrismaModule],
})
export class AppModule {}
