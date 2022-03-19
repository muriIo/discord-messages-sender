//#region Imports

import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth/auth.module';

//#endregion

@Module({
  imports: [
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
