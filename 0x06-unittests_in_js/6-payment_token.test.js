const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve a successful json response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((output) => {
        expect(output).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});
