const fetchProduct = require('../async.js');

describe('async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Mlik', price: 200 });
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Mlik', price: 200 });
    });
  });

  it('async - await', async () => {
    const promise = await fetchProduct();
    expect(promise).toEqual({ item: 'Mlik', price: 200 });
  });

  it('async-resolve', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Mlik', price: 200
    });
  });

  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  });
});