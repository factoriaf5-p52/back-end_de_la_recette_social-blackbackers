import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipieModule } from './recipie/recipie.module';
import { GroupModule } from './group/group.module';
dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RecipieModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
