const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
  it('should return with a status 200 (OK)', () => {
    return request(server)
      .get('/')
      .then(res => {
        // expect(res.status).toBe(300); <== SANITY CHECK
        expect(res.status).toBe(200);
      });
  });
  it('should return with the message: Welcome to the server!', () => {
    return request(server)
      .get('/')
      .then(res => {
        // console.log(res.text);
        // expect(res.text).toMatch('<h2>Welcome to the NOT server!</h2>'); <== SANITY CHECK
        expect(res.text).toMatch('<h2>Welcome to the server!</h2>');
      });
  });
});
