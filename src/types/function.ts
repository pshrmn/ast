import {
  callExpression,
  identifier
} from "@babel/types";

import {
  Expression,
  CallExpression
} from "@babel/types";

export function call(
  id: string,
  args: Array<Expression>
): CallExpression {
  return callExpression(
    identifier(id),
    args
  );
}
