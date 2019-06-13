import {
  variableDeclaration,
  variableDeclarator
} from "@babel/types";

import {
  Expression
} from "@babel/types";

import { ID } from "./primitives";

export interface VariableProps {
  name: string;
  init: Expression
}

function genericVar(type: "const" | "let" | "var", name: string, init: Expression) {
  return variableDeclaration(
    type,
    [variableDeclarator(
      ID(name),
      init
    )]
  );
}

export function CONST(props: VariableProps) {
  return genericVar("const", props.name, props.init);
}

export function LET(props: VariableProps) {
  return genericVar("let", props.name, props.init);
}

export function VAR(props: VariableProps) {
  return genericVar("var", props.name, props.init);
}
