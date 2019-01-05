import { id, str, num, bool } from "./primitives";
import { array } from "./array";
import { object, objProp } from "./object";

import {
  Expression
} from "@babel/types";

export interface InferableObject {
  [key: string]: Inferable
}
export interface InferableArray extends Array<Inferable> {}
export type Inferable = string | number | boolean | InferableObject | InferableArray;

export function infer(value: Inferable): Expression {
  switch (typeof value) {
    case "string":
      return str(value);
    case "number":
      return num(value);
    case "boolean":
      return bool(value);
    case "object":
      if (Array.isArray(value)) {
        return array(
          value.map((i: Inferable) => infer(i))
        );
      } else {
        return object(
          Object.keys(value)
            .map(
              p => objProp(id(p), infer(value[p])
            )
        ));
      }
    case "function":
      throw new Error(`infer does not work with functions`);
    default:
      throw new Error(`cannot handle type: ${typeof value}`);
  }
}
