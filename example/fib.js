const cache = [];

export const fib = (n) => {
  const c = cache[n];
  if (c != undefined) {
    return c;
  }
  return cache[n] = n <= 1 ? n : fib(n - 1) + fib(n - 2);
};
