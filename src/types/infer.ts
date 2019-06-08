import {
  nullLiteral
} from "@babel/types";

import { ID, STRING, NUMBER, BOOLEAN } from "./primitives";
import { ARRAY } from "./array";
import { OBJECT, OBJECT_PROP } from "./object";

import {
  Expression
} from "@babel/types";

export interface InferableObject {
  [key: string]: Inferable
}
export interface InferableArray extends Array<Inferable> {}
export type Inferable = string | number | boolean | undefined | null | InferableObject | InferableArray;

export function INFER(value: Inferable): Expression {
  switch (typeof value) {
    case "string":
      return STRING(value);
    case "number":
      return NUMBER(value);
    case "boolean":
      return BOOLEAN(value);
    case "undefined":
      return ID("undefined");
    case "object":
      if (value === null) {
        return nullLiteral();
      } else if (Array.isArray(value)) {
        return ARRAY(
          value.map((i: Inferable) => INFER(i))
        );
      } else {
        return OBJECT(
          Object.keys(value)
            .map(
              p => OBJECT_PROP(ID(p), INFER(value[p])
            )
        ));
      }
    case "function":
      throw new Error(`INFER does not work with functions`);
    default:
      throw new Error(`cannot handle type: ${typeof value}`);
  }
}
