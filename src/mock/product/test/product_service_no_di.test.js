const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// 우리는 productservice만 확인하고 싶은데, productsercice는 
// productclient에 의존하고 있기 때문에 productclient도 같이 확인이 되거나
// 연결이 불안정할 때, 테스트가 실행이 되지 않는다.
// 따라서 productclient를 mock해줘야 한다.
// 또한 productclient 안에 있는 fetchItems도 mock을 해주는 것
jest.mock('../product_client.js');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'MILK', available: true },
    { item: 'BANNA', available: false }
  ]);
  // 그러면 fetchItems라는 mock함수랑 mock하고 있는 productclient를 연결해주어야 한다.
  // 이 부분이 명확하게 생각이 안된다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems
    }
  });
  let productservice;

  beforeEach(() => {
    productservice = new ProductService();
  });

  it('should filter out only available', async () => {
    const items = await productservice.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'MILK', available: true }]);
  })
})