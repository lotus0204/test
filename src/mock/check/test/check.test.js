const check = require('../check.js');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0].toBe('yes'));
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);
    expect(onFail.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
})
// 함수를 테스트해주기 위해 모의함수를 만들어주는 것이다. 
// mock(가짜)ing을 하는 이유는 테스트 하려는 코드가 의존하고 있는 객체를 가짜로 만들어 의존성 제거하고 객체의 동작을 통제할 수 있기 떄문이다.
// 의존성이 있는 코드를 테스트하다가 테스트를 실패할 경우 어떤 코드가 문제인지 모르게 된다. 의존성 객체를 모킹함으로서 테스트중인 코드에만 집중하여 테스트할 수 있다.
// 예를 들어, 테스트 하려는 클래스에서 서버에 요청해서 받은 받은 데이터를 사용하고 있다면, 서버 동작을 모킹하여 이 서버가 잘 동작하는지는 신경쓸 필요 없이 테스트 할 수있다.
// 유닛테스트를 할 때는 테스트 하려는 객체에만 집중하고, 통합 테스트를 통해서 전체적인 테스트를 할 수 있다.