import { spreadElement } from "@babel/types";
import { ObjectProperty, ObjectMethod, SpreadElement, Identifier, Expression, PatternLike, Pattern, RestElement, TSParameterProperty, Statement } from "@babel/types";
export declare function OBJECT(properties: Array<ObjectProperty | ObjectMethod | SpreadElement>): import("@babel/types").ObjectExpression;
export declare function OBJECT_PROP(key: Identifier, value: Expression | PatternLike): ObjectProperty;
export declare function OBJECT_METHOD(kind: "method" | "get" | "set", key: Identifier, params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, body: Array<Statement>): ObjectMethod;
export declare const SPREAD_OBJECT: typeof spreadElement;
