# deno-test-helper

A helper tool to generate CSV output from Deno test results.

## Features
- Parses Deno test output and generates CSV or JSON
- Supports multi-level test groups
- Includes summary information (total tests, pass/fail counts)
- Provides optional output formatting flags (no summary, no time, JSON output)

## Requirements
- Deno runtime (version 1.x or later)

## Usage

To run the tests and generate CSV output:

```
deno test -A --unstable example/fib.test.js | deno run https://code4fukui.github.io/deno-test-helper/test2csv.js
```

To run locally:

```
deno test -A --unstable example/fib.test.js | deno run test2csv.js
```

Options:

```
--help     Show this help message
--nosum    Omit summary information
--notime   Omit test duration
--json     Output JSON instead of CSV
```

## License
MIT