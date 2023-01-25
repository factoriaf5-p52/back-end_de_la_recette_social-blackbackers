import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ){}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10)
    userObject = {...userObject, password:plainToHash};
    return this.userModel.create(userObject);
  }

  // login(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

}
