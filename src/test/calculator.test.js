const Calculator = require('../calculator.js');

describe('calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  // 각 테스트마다 새로운 계산기 객체를 생성해 내는 것은 엄청난 코드 중복을 유발한다.
  // 그래서 위의 beforeEach를 이용하여, 각 테스트 시작마다 계산기 객체를 생성해낸다.(각 테스트가 서로에게 영향을 주지 않기 위해서)
  // beforeEach이외에도 다양한 것들이 많으니 알면 좋을 듯...
  it('inits 0', () => {
    expect(cal.value).toBe(0)
  });

  it('set', () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it('clear', () => {
    cal.set(3);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1)
    cal.add(5);
    expect(cal.value).toBe(6);
  });

  it('subtract', () => {
    cal.set(5);
    cal.subtract(2);
    expect(cal.value).toBe(3);
  });

  it('multiply', () => {
    cal.set(6);
    cal.multiply(3);
    expect(cal.value).toBe(18);
  });
});

describe('divide', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('0/0===NaN', () => {
    cal.divide(0);
    expect(cal.value).toBe(NaN);
  });

  it('4/0===Infinity', () => {
    cal.set(4);
    cal.divide(0);
    expect(cal.value).toBe(Infinity);
  });

  it('general', () => {
    cal.set(20);
    cal.divide(5);
    expect(cal.value).toBe(4);
  })
})
