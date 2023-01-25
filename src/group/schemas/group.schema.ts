import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import internal from 'stream';

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Prop()
  name: string;

	@Prop()
  group_name: string;

	@Prop()
  admin_id: internal;

	@Prop()
	member_username: string;

}

export const GroupSchema = SchemaFactory.createForClass(Group);