export class Deferred<T = unknown> {
  promise: Promise<T>

  resolve!: (result?: T|PromiseLike<T>) => void
  reject!: (reason?: unknown) => void

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

export function defer<T>(): Deferred<T> {
  return new Deferred<T>()
}
