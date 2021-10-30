import * as t from "https://deno.land/std/testing/asserts.ts";
import { fib } from "./fib.js";

Deno.test("fib simple", async (_t) => {
  await _t.step("fib 1", async () => {
    t.assertEquals(fib(1), 1);
  });
});
Deno.test("fib calc", async (_t) => {
  await _t.step("fib 2", async () => {
    t.assertEquals(fib(2), 1);
  });
  await _t.step("fib 3", async () => {
    t.assertEquals(fib(3), 2);
  });
  await _t.step("fib 4", async () => {
    t.assertEquals(fib(4), 3);
  });
  await _t.step("fib 5", async () => {
    t.assertEquals(fib(5), 5);
  });
});
Deno.test("fib big", async (_t) => {
  await _t.step("fib 10", async () => {
    t.assertEquals(fib(10), 55);
  });
  await _t.step("fib 20", async () => {
    t.assertEquals(fib(20), 6765);
  });
  await _t.step("fib 40", async () => {
    t.assertEquals(fib(40), 102334155);
  });
});
Deno.test("fib illegal", async (_t) => {
  await _t.step("fib 0", async () => {
    t.assertEquals(fib(0), 0);
  });
  await _t.step("fib -1", async () => {
    t.assertEquals(fib(-1), -1);
  });
});
