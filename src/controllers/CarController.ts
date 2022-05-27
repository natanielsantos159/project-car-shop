import { Request, Response } from 'express';
import Controller from '.';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';
import { ServiceError } from '../services';

export default class CarController extends Controller<Car> {
  private $route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.service.create(req.body);

    if ((response as ServiceError).error) {
      return res.status(400).json((response as ServiceError).error);
    }

    return res.status(201).json(response);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.params.id)
    const response = await this.service.delete(req.params.id);
    
    if (response && (response as ServiceError).error) {
      return res.status(400).json((response as ServiceError).error);
    }

    return res.status(204);
  };
}
