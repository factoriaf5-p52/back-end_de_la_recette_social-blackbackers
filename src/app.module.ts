import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipieModule } from './recipie/recipie.module';
import { GroupModule } from './group/group.module';
import { RecipieModule } from './recipie/recipie.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipieModule } from './recipie/recipie.module';
import { UserModule } from './user/user.module';
import { NotificationsModule } from './notifications/notifications.module';

dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RecipieModule,
    GroupModule,
    IngredientModule,
    UserModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
