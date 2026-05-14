# deno-test-helper

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A command-line helper tool that parses the output of `deno test` and converts it to structured CSV or JSON.

## Features

- Parses standard `deno test` output piped from stdin.
- Converts test results into structured CSV or JSON formats.
- Recognizes nested tests (`Deno.test` with `t.step`) as groups and individual tests.
- Optionally includes summary counts for each test group and a total count.
- Provides flags to customize the output, such as omitting summaries or test durations.

## Requirements

- Deno runtime (version 1.x or later)

## Usage

This tool is designed to be used with a pipe. You run your Deno tests and pipe the output directly to `test2csv.js`.

### Running the remote script

You can run the script directly from its URL:

```sh
deno test -A --unstable example/fib.test.js | deno run https://code4fukui.github.io/deno-test-helper/test2csv.js
```

### Running a local clone

If you have cloned this repository, you can run the script locally:

```sh
deno test -A --unstable example/fib.test.js | deno run test2csv.js
```

### Example

Given the standard output from `deno test`:

```text
running 4 tests from file:///Users/fukuno/data/js/cmdtool/deno-test-helper/example/fib.test.js
test fib simple ...
  test fib 1 ... ok (9ms)
ok (16ms)
test fib calc ...
  test fib 2 ... ok (8ms)
  test fib 3 ... ok (7ms)
  test fib 4 ... ok (19ms)
  test fib 5 ... ok (7ms)
ok (48ms)
test fib big ...
  test fib 10 ... ok (7ms)
  test fib 20 ... ok (8ms)
ok (23ms)
test fib illegal ...
  test fib