import { Schema, Document } from 'mongoose';

export const NewsSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, unique: true, required: true },
  summary: { type: String, required: false },
  source: { type: String, required: false },
  publishedAt: { type: Date, required: false },
});

export interface News extends Document {
  title: string;
  url: string;
  summary?: string;
  source?: string;
  publishedAt?: Date;
}
