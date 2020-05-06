import { defer } from '~/main';

jest.resetModules();

test('resolve', () => {
  expect.assertions(1);
  const d = defer();
  expect(d.promise).resolves.toBe(1);
  d.resolve(1);
});

test('reject', () => {
  expect.assertions(1);
  const d = defer();
  expect(d.promise).rejects.toBe(1);
  d.reject(1);
});
