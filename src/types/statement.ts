import {
  expressionStatement
} from "@babel/types";

import {
  Expression
} from "@babel/types";

export function asStatement(e: Expression) {
  return expressionStatement(e);
}
