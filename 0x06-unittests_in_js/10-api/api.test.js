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

describe('Cart Page', () => {
  it('should return the correct status code', () => {
    const url = 'http://localhost:7865/cart/12';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return the correct message', () => {
    const url = 'http://localhost:7865/cart/12';
    request(url, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
    });
  });

  it('should return the correct status code', () => {
    const url = 'http://localhost:7865/cart/hello';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });

  it('should return the correct message', () => {
    const url = 'http://localhost:7865/cart/hello';
    request(url, (error, response, body) => {
      expect(body).to.equal('Cart not found');
    });
  });
});

describe('Login', () => {
  it('should return the correct status code', () => {
    const url = 'http://localhost:7865/login';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return the correct message', () => {
    const url = 'http://localhost:7865/login';
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome undefined');
    });
  });
});

describe('Available Payments', () => {
  it('should return the correct status code', () => {
    const url = 'http://localhost:7865/available_payments';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return the correct message', () => {
    const url = 'http://localhost:7865/available_payments';
    request(url, (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
    });
  });
});
