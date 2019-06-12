import {
  newExpression,
  binaryExpression
} from "@babel/types";

import { Expression } from "@babel/types";

export type Operator = "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";

export const NEW = newExpression;

export function BINARY(left: Expression, operator: Operator, right: Expression) {
  return binaryExpression(operator, left, right);
}