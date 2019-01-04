import {
  callExpression,
  functionDeclaration,
  blockStatement,
  returnStatement
} from "@babel/types";

import {
  Expression,
  CallExpression,
  LVal,
  Statement
} from "@babel/types";

import {
  id
} from "./primitives";

export function call(
  name: string,
  args: Array<Expression>
): CallExpression {
  return callExpression(
    id(name),
    args
  );
}

export function func(
  name: string,
  params: Array<LVal>,
  body: Array<Statement>
) {
  return functionDeclaration(
    id(name),
    params,
    blockStatement(body)
  )
}

export function returnValue(
  arg: Expression
) {
  return returnStatement(arg);
}