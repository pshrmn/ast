import {
  callExpression,
  functionDeclaration,
  arrowFunctionExpression,
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

export function ARROW_FUNCTION(
  params: Array<Identifier | Pattern | RestElement | TSParameterProperty>,
  body: Expression | Array<Statement>
) {
  return arrowFunctionExpression(
    params,
    Array.isArray(body) ? blockStatement(body) : body
  );
}

export const RETURN = returnStatement;
