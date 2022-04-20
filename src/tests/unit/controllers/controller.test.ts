import sinon from 'sinon';
import chai from 'chai';
import 'mocha';
import chaiHttp = require('chai-http');
import { carDocumentMock, carInfo } from '../../utils/CarMock';
import CarModel from '../../../models/CarModel';
import server from '../../../server';

chai.use(chaiHttp);

const { expect } = chai;

describe('CarController', () => {

  let chaiHttpResponse;
  const carModel = new CarModel();

  describe('rota POST /cars', () => {

    before(() => {
      sinon.stub(carModel.model, "create").resolves(carDocumentMock);
    })

    after(() => {
      (carModel.model.create as sinon.SinonStub).restore();
    })

    it('retorna 201 e objeto quando chamada com dados válidos', async () => {
      chaiHttpResponse = await chai
        .request(server.app)
        .post('/cars')
        .send(carInfo);

      expect(chaiHttpResponse.status).to.equal(201)
      expect(chaiHttpResponse.body).to.deep.equal(carDocumentMock);
    });

  })

});