const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should return the correct status code', () => {
    const url = 'http://localhost:7865';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return the correct message', () => {
    const url = 'http://localhost:7865';
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
