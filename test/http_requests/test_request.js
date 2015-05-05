import 'whatwg-fetch'

import getData  from '../../assets/javascripts/http_requests/get_data'
import postData from '../../assets/javascripts/http_requests/post_data'

describe('Request', () => {
  let server;

  beforeEach(() => server = sinon.fakeServer.create());
  afterEach(()  => server.restore() );

  describe('getData', () => {
    it('should return promise fulfilled with response', (done) => {
      const promise      = getData('/test');
      const responseData = {
        prop: 'Testing',
        didRespond: true
      };

      server.requests[0].respond(
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(responseData)
      );

      promise.then((response) => {
        expect(response).to.deep.equal(responseData);
        done();
      });
    });

    it('should return promise rejected with error', (done) => {
      const promise      = getData('/anotherTest');
      const responseData = {
        table: {
          errors: 'Something went wrong!'
        }
      };

      server.requests[0].respond(
        500,
        { 'Content-Type': 'application/json' },
        JSON.stringify(responseData)
      );

      promise.then((response) => {
        expect(response).to.deep.equal(responseData);
        done()
      });
    });
  });

  describe('postData', () => {
    it('should return promise fulfilled with response', (done) => {
      const promise      = postData('/test', { data: 'example' });
      const responseData = '';

      server.requests[0].respond(
        201,
        { 'Content-Type': 'application/json' },
        JSON.stringify(responseData)
      );

      promise.then((response) => {
        expect(response).to.equal(responseData);
        done();
      });
    });

    it('should return promise rejected with error', (done) => {
      const promise      = postData('/test', { data: 'example' });
      const responseData = {
        table: {
          errors: 'Something went wrong!'
        }
      };

      server.requests[0].respond(
        406,
        { 'Content-Type': 'application/json' },
        JSON.stringify(responseData)
      );

      promise.then((response) => {
        expect(response).to.deep.equal(responseData);
        done();
      })
    })
  })
});
