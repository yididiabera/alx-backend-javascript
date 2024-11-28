const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const spy = sinon.spy(Utils, 'calculateNumber');
const { expect } = require('chai');

sendPaymentRequestToApi(100, 20);

describe('sendPaymentRequestToApi', () => {
  it('should should be called', () => {
    expect(spy.called).to.be.true;
  });

  it('should be called once', () => {
    expect(spy.calledOnce).to.be.true;
  });

  it('should be called with the correct parameters', () => {
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});

spy.restore();
