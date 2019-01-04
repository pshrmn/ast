import * as t from "@babel/types";
import generate from "@babel/generator";

export default function stringify(
  nodes: Array<t.Statement>,
  newlines?: number
): string {
  let code = generate(t.program(nodes)).code;
  if (newlines) {
    code += "\n".repeat(newlines);
  }
  return code;
}
