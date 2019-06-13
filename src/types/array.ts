import {
  arrayExpression
} from "@babel/types";

import {
  Expression,
  SpreadElement
} from "@babel/types";

export function ARRAY(elements: Array<null | Expression | SpreadElement>) {
  return arrayExpression(elements);
};
