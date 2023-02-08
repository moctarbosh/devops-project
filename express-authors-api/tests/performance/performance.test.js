const request = require("supertest");

const app = require("../../server.js");

describe("Test performance endpoints", (done) => {
    test('/ endpoint should have a response time of less than 100ms', async () => {
        const response = await request(app)
          .get('/')
          .expect(200);
        const responseTimeNum = parseInt(response.header['x-response-time'], 10);
        expect(responseTimeNum).toBeLessThan(100);
      });

    test('/authors/1 endpoint should have a response time of less than 100ms', async () => {
        const response = await request(app)
          .get('/authors/1')
          .expect(200);
        const responseTimeNum = parseInt(response.header['x-response-time'], 10);
        expect(responseTimeNum).toBeLessThan(100);
      });

    test('/authors/2 endpoint should have a response time of less than 100ms', async () => {
        const response = await request(app)
          .get('/authors/2')
          .expect(200);
        const responseTimeNum = parseInt(response.header['x-response-time'], 10);
        expect(responseTimeNum).toBeLessThan(100);
      });

    test('/authors/3 endpoint should have a response time of less than 100ms', async () => {
        const response = await request(app)
          .get('/authors/3')
          .expect(200);
        const responseTimeNum = parseInt(response.header['x-response-time'], 10);
        expect(responseTimeNum).toBeLessThan(100);
      });

      test('/authors/45 endpoint should have a response time of less than 100ms', async () => {
        const response = await request(app)
          .get('/authors/45')
          .expect(404);
        const responseTimeNum = parseInt(response.header['x-response-time'], 10);
        expect(responseTimeNum).toBeLessThan(100);
      });
    });