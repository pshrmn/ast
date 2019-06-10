import {
  objectExpression,
  objectProperty,
  objectMethod,
  blockStatement,
  spreadElement,
  memberExpression
} from "@babel/types";

import {
  ObjectProperty,
  ObjectMethod,
  SpreadElement,
  Identifier,
  Expression,
  PatternLike,
  Pattern,
  RestElement,
  TSParameterProperty,
  Statement
} from "@babel/types";

export function OBJECT(properties: Array<ObjectProperty | ObjectMethod | SpreadElement>) {
  return objectExpression(properties);
}

export function OBJECT_PROP(key: Identifier, value: Expression | PatternLike) {
  return objectProperty(key, value);
}

export function OBJECT_METHOD(
  kind: "method" | "get" | "set",
  key: Identifier,
  params: Array<Identifier | Pattern | RestElement | TSParameterProperty>,
  body: Array<Statement>
) {
  return objectMethod(kind, key, params, blockStatement(body));
}

export const SPREAD_OBJECT = spreadElement;
export const MEMBER = memberExpression;
