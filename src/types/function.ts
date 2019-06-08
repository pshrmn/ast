import {
  callExpression,
  functionDeclaration,
  blockStatement,
  returnStatement
} from "@babel/types";

import {
  Expression,
  CallExpression,
  Identifier,
  Pattern,
  RestElement,
  TSParameterProperty,
  Statement
} from "@babel/types";

import {
  ID
} from "./primitives";

export function CALL(
  name: string,
  args: Array<Expression>
): CallExpression {
  return callExpression(
    ID(name),
    args
  );
}

export function FUNCTION(
  name: string,
  params: Array<Identifier | Pattern | RestElement | TSParameterProperty>,
  body: Array<Statement>
) {
  return functionDeclaration(
    ID(name),
    params,
    blockStatement(body)
  )
}

export const RETURN = returnStatement;
