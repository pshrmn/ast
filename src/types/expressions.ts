import {
  newExpression,
  binaryExpression
} from "@babel/types";

import {
  Expression,
  SpreadElement,
  JSXNamespacedName,
  ArgumentPlaceholder
} from "@babel/types";

export interface NewProps {
  callee: Expression;
  arguments?: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
}

export interface BinaryProps {
  operator: Operator;
  left: Expression;
  right: Expression;
}

export type Operator = "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";

export function NEW(props: NewProps) {
  return newExpression(
    props.callee,
    props.arguments || []
  );
}

export function BINARY(props: BinaryProps) {
  return binaryExpression(props.operator, props.left, props.right);
}
