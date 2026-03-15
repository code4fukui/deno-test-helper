# deno-test-helper

Denoのテストの結果をCSV形式で出力するためのツールです。

## 使い方

以下のようにテストの出力をパイプしてツールを実行します:

```
deno test -A --unstable example/fib.test.js | deno run https://code4fukui.github.io/deno-test-helper/test2csv.js
```

## オプション

- `--help`: ヘルプを表示します
- `--nosum`: テストの合計数を表示しません
- `--notime`: テストの実行時間を表示しません
- `--json`: JSONフォーマットで出力します

## ライセンス

MIT License