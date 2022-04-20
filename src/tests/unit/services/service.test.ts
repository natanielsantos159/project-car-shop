import { expect } from 'chai';
import sinon from 'sinon';
import 'mocha';
import CarService from '../../../services/CarService';
import { carInfo, carDocumentMock } from '../../utils/CarMock';
import CarModel from '../../../models/CarModel';

describe('CarService', () => {

  const carModel = new CarModel();
  const carService = new CarService();

  before(() => {
    sinon.stub(carModel.model, "create").resolves(carDocumentMock);
  })

  after(() => {
    (carModel.model.create as sinon.SinonStub).restore();
  })

  it('função create', async () => {
    const response = await carService.create(carInfo);

    expect(response).to.be.deep.equal(carDocumentMock);
  })
})