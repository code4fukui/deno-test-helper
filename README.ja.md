# deno-test-helper

`deno test` の出力を解析し、構造化された CSV または JSON に変換するコマンドラインヘルパーツールです。

## 機能

- 標準入力 (stdin) からパイプされた標準の `deno test` の出力を解析します。
- テスト結果を構造化された CSV または JSON 形式に変換します。
- ネストされたテスト (`Deno.test` と `t.step`) をグループおよび個別のテストとして認識します。
- オプションで、各テストグループの集計数と全体の総数を含めることができます。
- 集計やテスト実行時間の省略など、出力をカスタマイズするためのフラグを提供します。

## 要件

- Deno ランタイム (バージョン 1.x 以降)

## 使い方

このツールはパイプで使用するように設計されています。Deno でテストを実行し、その出力を直接 `test2csv.js` にパイプします。

### リモートスクリプトの実行

URLからスクリプトを直接実行できます:

```sh
deno test -A --unstable example/fib.test.js | deno run https://code4fukui.github.io/deno-test-helper/test2csv.js
```

### ローカルクローンの実行

このリポジトリをクローンしている場合は、ローカルでスクリプトを実行できます:

```sh
deno test -A --unstable example/fib.test.js | deno run test2csv.js
```

### 例

`deno test` の標準出力が以下のような場合:

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
```
