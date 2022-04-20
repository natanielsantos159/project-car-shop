import { expect } from 'chai';
import sinon from 'sinon';
import 'mocha';
import CarModel from '../../../models/CarModel';
import { carInfo, carDocumentMock } from '../../utils/CarMock';

describe('CarModel', () => {

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