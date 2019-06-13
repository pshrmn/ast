import { Expression, SpreadElement, JSXNamespacedName, ArgumentPlaceholder } from "@babel/types";
export interface NewProps {
    callee: Expression;
    arguments?: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
}
export interface BinaryProps {
    operator: Operator;
    left: Expression;
    right: Expression;
}
export declare type Operator = "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";
export declare function NEW(props: NewProps): import("@babel/types").NewExpression;
export declare function BINARY(props: BinaryProps): import("@babel/types").BinaryExpression;
