import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private readonly notificationModel: Model<Notification>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    const newNotification = new this.notificationModel(createNotificationDto);
    return await newNotification.save();
  }

  async findAll(): Promise<Notification[]> {
    const notificationsData = await this.notificationModel.find();
if (!notificationsData || notificationsData.length == 0) {
  console.log("Error: no data");
}
    return notificationsData;
  }

  async findOne(id: string) {
    if (mongoose.Types.ObjectId.isValid(id)) {
    const singleNotificationData = await this.notificationModel.findById(id)
    return singleNotificationData;
  }
}

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    const updatedNotification = await this.notificationModel.findByIdAndUpdate(id,updateNotificationDto);

    return updatedNotification;
  }

  async remove(id: string) {
    const removedNotification = await this.notificationModel.findByIdAndDelete(id)
    return removedNotification;
  }

  

}
