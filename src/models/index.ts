import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(public model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  update = async (str: string, obj: T): Promise<T | null> => {
    const res = await this.model.updateOne({ _id: str }, { obj });
    return res.modifiedCount ? obj : null;
  };

  delete = async (str: string): Promise<number | null> => {
    const res = await this.model.deleteOne({ _id: str });
    return res.deletedCount;
  };
}

export default MongoModel;