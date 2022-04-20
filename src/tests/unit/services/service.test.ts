import { expect } from 'chai';
import sinon from 'sinon';
import 'mocha';
import CarService from '../../../services/CarService';
import { Car } from '../../../interfaces/CarInterface';

describe('CarService', () => {

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

  const carService = new CarService();

  before(() => {
    sinon.stub(carService.model, "create").resolves(carDocumentMock)
  })

  after(() => (carService.model.create as sinon.SinonStub).restore())

  it('função create', async () => {
    const response = await carService.create(carInfo);

    expect(response).to.be.deep.equal(carDocumentMock);
  })
})