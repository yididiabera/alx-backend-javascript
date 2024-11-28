const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
const { expect } = require('chai');
const spy = sinon.spy(console, 'log');

sendPaymentRequestToApi(100, 20);

describe('sendPaymentRequestToApi', () => {
  it('should be called with the correct arguments', () => {
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
  });

  it('should log the correct message to the console', () => {
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});

spy.restore();
stub.restore();
