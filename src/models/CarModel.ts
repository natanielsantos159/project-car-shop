import { Document, model as createModel, Schema } from 'mongoose';
import MongoModel from '.';
import { Car } from '../interfaces/CarInterface';

interface CarDocument extends Car, Document { }

const CarMoongooseSchema = new Schema<CarDocument>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', CarMoongooseSchema)) {
    super(model);
  }
}

export default CarModel;