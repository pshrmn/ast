import {
  variableDeclaration,
  variableDeclarator
} from "@babel/types";

import {
  Expression
} from "@babel/types";

import { ID } from "./primitives";

function genericVar(type: "const" | "let" | "var", name: string, init: Expression) {
  return variableDeclaration(
    type,
    [variableDeclarator(
      ID(name),
      init
    )]
  );
}

export function CONST(name: string, init: Expression) {
  return genericVar("const", name, init);
}

export function LET(name: string, init: Expression) {
  return genericVar("let", name, init);
}

export function VAR(name: string, init: Expression) {
  return genericVar("var", name, init);
}
