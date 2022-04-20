import { Car } from '../../interfaces/CarInterface';

const carInfo: Car = {
  doorsQty: 2,
  seatsQty: 2,
  model: "Modelo",
  year: 2000,
  color: "red",
  status: true,
  buyValue: 10000,
};

const carDocumentMock = {
  "_id": "12345678",
  ...carInfo,
}

export { carInfo, carDocumentMock }