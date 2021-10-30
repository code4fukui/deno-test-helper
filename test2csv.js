import { readLines } from "https://deno.land/std/io/mod.ts";
import { CSV } from "https://js.sabae.cc/CSV.js";

const test2csv = (s) => {
  const lines = s.split("\n");
  const res = [];
  let group = null;
  for (const line of lines) {
    if (line.startsWith("test ")) {
      const n = line.indexOf(" ...");
      const name = line.substring(5, n);
      const ok = line.indexOf("ok", n);
      if (ok == -1) {
        //throw new Error();
      }
      group = name;
    } else if (line.startsWith("  test ")) {
      const n = line.indexOf(" ...");
      const name = line.substring(7, n);
      const ok = line.indexOf("ok", n);
      if (ok == -1) {
        throw new Error();
      }
      const time = line.match(/\((\d+)ms\)/)[1];
      res.push({ group, name, time });
    }
  }
  return res;
};

const appendSumByGroup = (data) => {
  const res = [];
  let cnt = 0;
  let group = null;
  for (const d of data) {
    if (group == null) {
      group = d.group;
      cnt = 1;
      res.push(d);
    } else if (group == d.group) {
      cnt++;
      res.push(d);
    } else {
      res.push({ group, cnt });
      group = d.group;
      cnt = 1;
      res.push(d);
    }
  }
  res.push({ group, cnt });
  res.push({ group: "all", cnt: data.length });
  return res;
};
/*
export NO_COLOR=true
*/

if (Deno.args.indexOf("-help") >= 0) {
  console.log(
`run test2csv ex)example/fib.test.js:
deno test -A --unstable example/fib.test.js | deno run test2csv.js

options:
--help     this message
--nosum    without sum
--withtime with time(ms)
--json     output json instead of csv`);
  Deno.exit(0);
}

const lines = [];
for await (const line of readLines(Deno.stdin)) {
  //console.log("*" + line);
  lines.push(line);
}
const output = lines.join("\n");

/*
const output = await Deno.readTextFile("output.txt");
*/
let data = test2csv(output);

if (Deno.args.indexOf("--withtime") >= 0) {
} else {
  data.forEach(d => delete d.time);
}
if (Deno.args.indexOf("--nosum") >= 0) {
} else {
  data = appendSumByGroup(data);
}
if (Deno.args.indexOf("--json") >= 0) {
} else {
  data = CSV.stringify(data);
}
console.log(data);
