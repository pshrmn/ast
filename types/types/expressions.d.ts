import { newExpression } from "@babel/types";
import { Expression } from "@babel/types";
export declare type Operator = "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";
export declare const NEW: typeof newExpression;
export declare function BINARY(left: Expression, operator: Operator, right: Expression): import("@babel/types").BinaryExpression;
