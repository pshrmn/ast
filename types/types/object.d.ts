import * as t from "@babel/types";
import { ObjectProperty, ObjectMethod, SpreadElement, Identifier, Expression, PatternLike, LVal, Statement } from "@babel/types";
export declare function object(properties: Array<ObjectProperty | ObjectMethod | SpreadElement>): t.ObjectExpression;
export declare function objProp(key: Identifier, value: Expression | PatternLike): t.ObjectProperty;
export declare function objMethod(kind: "method" | "get" | "set", key: Identifier, params: Array<LVal>, body: Array<Statement>): t.ObjectMethod;
export declare const objSpread: typeof t.spreadElement;
