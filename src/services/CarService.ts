import Service, { ServiceError } from '.';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (carInfo: Car) : Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(carInfo);

    if (!parsed.success) return { error: parsed.error };

    return this.model.create(carInfo);
  };

  delete = async (id: string) : Promise<ServiceError | null> => {
    if (!id || id.length !== 24) {
      return { error: 'Id must have 24 hexadecimal characters' };
    }

    const deleteCount = this.model.delete(id);

    if (!deleteCount) return { error: 'Object not found' };

    return null;
  };
}

export default CarService;