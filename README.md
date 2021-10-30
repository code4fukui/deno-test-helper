# deno-test-helper

output CSV from Deno with test multi levels

## to run

```
deno test -A --unstable example/fib.test.js | deno run https://code4fukui.github.io/deno-test-helper/test2csv.js
```

## run local

```
deno test -A --unstable example/fib.test.js | deno run test2csv.js
```

## options

```
--help     this message
--nosum    without sum
--withtime with time(ms)
--json     output json instead of csv
```
