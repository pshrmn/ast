import {
  variableDeclaration,
  variableDeclarator
} from "@babel/types";

import {
  Expression
} from "@babel/types";

import { id } from "./primitives";

function genericVar(type: "const" | "let" | "var", name: string, init: Expression) {
  return variableDeclaration(
    type,
    [variableDeclarator(
      id(name),
      init
    )]
  );
}

export function constVar(name: string, init: Expression) {
  return genericVar("const", name, init);
}

export function letVar(name: string, init: Expression) {
  return genericVar("let", name, init);
}

export function varVar(name: string, init: Expression) {
  return genericVar("var", name, init);
}
