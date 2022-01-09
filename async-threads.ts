import { combineLatest, lastValueFrom } from 'rxjs';

/**
 * Write body of function asyncThreadsResolver which should execute Promises asynchronously.
 * Optionally, write body of function rxjsThreadsResolver which do the same via rxjs functions.
 */

const firstPromise = new Promise((resolve, reject) => setTimeout(
  () => resolve(true),
  5000,
  ),
);

const secondPromise = new Promise((resolve, reject) => setTimeout(
  () => reject('Some error happened'),
  4000,
  ),
);

function asyncThreadsResolver(...threads: Promise<unknown>[]): Promise<unknown[]> {
  return Promise.allSettled(threads);
}

function rxjsThreadsResolver(...threads: Promise<unknown>[]): Promise<unknown[]> {
  return lastValueFrom(combineLatest(
    threads
      .map(promise => promise
        .then((result) => ({ status: 'fulfilled', value: result }))
        .catch((error) => ({ status: 'rejected', value: error })))
    ),
  );
}

function threadsResolver(method: 'async' | 'rxjs' = 'async', ...threads: Promise<unknown>[]): Promise<unknown[]> {
  return method === 'async'
    ? asyncThreadsResolver(...threads)
    : rxjsThreadsResolver(...threads)
}

console.time('Promises time execution');

const promiseResults = threadsResolver('async', firstPromise, secondPromise)
  .then((result) => {
    console.timeEnd('Promises time execution');

    console.dir(result);
  });
