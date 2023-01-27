import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipe/recipe.module';
import { GroupModule } from './group/group.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { UserModule } from './user/user.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';

dotenv.config()


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RecipeModule,
    GroupModule,
    IngredientModule,
    UserModule,
    NotificationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
