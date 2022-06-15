import { sync } from "fast-glob";
import { readFileSync, writeFileSync } from "fs";

const allPages: string[] = sync("dist/**/*.html");

for (let x of allPages) {
  let content: string = readFileSync(x).toString();
  content = content
  	.replace('<script src="/alpine.js"></script>', '<script src="/alpine.js"></script><script src="/turbo.js"></script>')
    .replace(/type="module" crossorigin=""/g, 'type="no-module" crossorigin=""')
    .replace(
      /rel="modulepreload" crossorigin=""/g,
      'rel="no-modulepreload" crossorigin=""'
    );
  writeFileSync(x, content);
}
