import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CrawledNewsDocument = CrawledNews & Document;

@Schema({ collection: 'CrawledNews' })
export class CrawledNews {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  url: string;

  @Prop()
  summary?: string;

  @Prop()
  source?: string;

  @Prop()
  countryCode?: string;

  @Prop()
  publishedAt?: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop([String])
  categoryName: string[];

  @Prop()
  img?: string;

  @Prop()
  content?: string;
}

export const CrawledNewsSchema = SchemaFactory.createForClass(CrawledNews);
