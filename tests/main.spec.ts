import { defer } from '~/main.js'

test('resolve', () => {
  expect.assertions(1)
  const d = defer()
  void expect(d.promise).resolves.toBe(1)
  d.resolve(1)
})

test('reject', () => {
  expect.assertions(1)
  const d = defer()
  void expect(d.promise).rejects.toBe(1)
  d.reject(1)
})

test('catch', async() => {
  expect.assertions(1)
  const d = defer<void>()
  setTimeout(() => {
    d.reject(1)
  }, 100)
  try {
    await d.promise
  } catch (e: unknown) {
    expect(e).toBe(1)
  }
})
