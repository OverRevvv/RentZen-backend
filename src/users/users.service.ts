import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from './model/user.model';
import { CreateUserDTO } from './dto/createUserDTO';
import { UpdateUserDTO } from './dto/updateUserDTO';
import * as bcrypt from 'bcrypt';

const saltRounds: number = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<userDocument>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<string> {
    try {
      const userExists = await this.userModel.findOne({
        email: createUserDTO.email,
      });
      if (userExists) {
        return 'User already exists';
      }
      const hashedPassword = await bcrypt.hash(
        createUserDTO.password,
        saltRounds,
      );
      const newUser = new this.userModel({
        ...createUserDTO,
        password: hashedPassword,
      });
      const result = await newUser.save();
      if (!result) {
        return "something went wrong and can't confirm if user was created";
      }
      return 'User created successfully';
    } catch (error) {
      throw new NotFoundException('Something Went wrong ', error);
    }
  }

  async getUser(userID: string): Promise<user> {
    try {
      const userData = await this.userModel.findById(userID);
      return userData;
    } catch (error) {
      throw new NotFoundException('Something Went wrong ', error);
    }
  }

  async updateUser(userID: string, userData: UpdateUserDTO): Promise<string> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userID,
        {
          ...userData,
        },
        { new: true },
      );

      const result = await updatedUser.save();

      if (!result) {
        return 'something went wrong';
      }

      return "User's data updated successfully";
    } catch (error) {
      throw new NotFoundException('Something Went wrong ', error);
    }
  }

  async findOneWithEmail(mail: string): Promise<user> {
    return await this.userModel.findOne({ email: mail });
  }
}
