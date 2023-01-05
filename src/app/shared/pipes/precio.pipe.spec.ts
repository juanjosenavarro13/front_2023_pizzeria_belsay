import { PrecioPipe } from './precio.pipe';

describe('PrecioPipe', () => {
  it('create an instance', () => {
    const pipe = new PrecioPipe();

    expect(pipe).toBeTruthy();
  });

  it('use pipe', () => {
    const pipe = new PrecioPipe();

    expect(pipe.transform(10)).toEqual('10€');
    expect(pipe.transform(5.5)).toEqual('5.50€');
    expect(pipe.transform(3.21)).toEqual('3.21€');
    expect(pipe.transform(undefined)).toEqual('');
  });
});
