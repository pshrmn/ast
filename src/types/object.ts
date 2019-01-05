import * as t from "@babel/types";

import {
  objectExpression,
  objectProperty,
  objectMethod,
  blockStatement,
  spreadElement
} from "@babel/types";

import {
  ObjectProperty,
  ObjectMethod,
  SpreadElement,
  Identifier,
  Expression,
  PatternLike,
  LVal,
  Statement
} from "@babel/types";

export function object(properties: Array<ObjectProperty | ObjectMethod | SpreadElement>) {
  return objectExpression(properties);
}

export function objProp(key: Identifier, value: Expression | PatternLike) {
  return objectProperty(key, value);
}

export function objMethod(
  kind: "method" | "get" | "set",
  key: Identifier,
  params: Array<LVal>,
  body: Array<Statement>
) {
  return objectMethod(kind, key, params, blockStatement(body));
}

export const objSpread = spreadElement;
