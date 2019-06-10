import * as t from "@babel/types";
import generate from "@babel/generator";

export default function stringify(
  strings: TemplateStringsArray,
  ...keys: Array<t.Statement>
): string {
  let output = "";
  for (let i=0, len=strings.length; i<len; i++) {
    output += strings[i];
    if (keys[i] !== undefined) {
      output += generate(
        t.program([keys[i]])
      ).code;
    }
  }
  return output;
}
