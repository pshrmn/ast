import {
  expressionStatement
} from "@babel/types";

import {
  Expression
} from "@babel/types";

export function AS_STATEMENT(e: Expression) {
  return expressionStatement(e);
}
