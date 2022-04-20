import { expect } from 'chai';
import sinon from 'sinon';
import 'mocha';
import CarModel from '../../../models/CarModel';
import { Car } from '../../../interfaces/CarInterface';

describe('CarModel', () => {

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

  const carModel = new CarModel();

  before(() => {
    sinon.stub(carModel.model, "create").resolves(carDocumentMock);
  })

  after(() => {
    (carModel.model.create as sinon.SinonStub).restore();
  })

  it('função create', async () => {
    const response = await carModel.create(carInfo);
    
    expect(response).to.deep.equal(carDocumentMock);
  })
})