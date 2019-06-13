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
  Statement,
  SpreadElement,
  JSXNamespacedName,
  ArgumentPlaceholder
} from "@babel/types";

import {
  ID
} from "./primitives";

export interface CallProps {
  callee: Expression | string;
  arguments?: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
}

export interface FunctionProps {
  id: string | Identifier | null | undefined;
  params?: Array<Identifier | Pattern | RestElement>;
  body: Array<Statement>;
  generator?: boolean;
  async?: boolean;
}

export interface ArrowFunctionProps {
  params?: Array<Identifier | Pattern | RestElement>;
  body: Array<Statement> | Expression;
  async?: boolean;
}

export function CALL(
  props: CallProps
): CallExpression {
  return callExpression(
    typeof props.callee === "string" ? ID(props.callee) : props.callee,
    props.arguments || []
  );
}

export function FUNCTION(
  props: FunctionProps
) {
  return functionDeclaration(
    typeof props.id === "string" ? ID(props.id) : props.id,
    props.params || [],
    blockStatement(props.body),
    props.generator,
    props.async
  );
}

export function ARROW_FUNCTION(
  props: ArrowFunctionProps
) {
  return arrowFunctionExpression(
    props.params || [],
    Array.isArray(props.body) ? blockStatement(props.body) : props.body,
    props.async
  );
}

export const RETURN = returnStatement;
