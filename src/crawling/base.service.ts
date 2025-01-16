import { Document, Model } from 'mongoose';

export class BaseService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(createDto: any): Promise<T> {
    const created = new this.model(createDto);
    return created.save();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async update(id: string, updateDto: any): Promise<T> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
