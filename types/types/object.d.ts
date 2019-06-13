import { spreadElement } from "@babel/types";
import { ObjectProperty, ObjectMethod, SpreadElement, Identifier, Expression, PatternLike, Pattern, RestElement, Statement } from "@babel/types";
export interface ObjectPropertyProps {
    key: any;
    value: Expression | PatternLike;
    computed?: boolean;
    shorthand?: boolean;
}
export interface ObjectMethodProps {
    kind?: "method" | "get" | "set" | undefined;
    key: any;
    params?: Array<Identifier | Pattern | RestElement>;
    body?: Array<Statement>;
    computed?: boolean;
}
export interface MemberProps {
    object: Expression;
    property: any;
    computed?: boolean;
    optional?: true | false | null;
}
export declare function OBJECT(properties: Array<ObjectMethod | ObjectProperty | SpreadElement>): import("@babel/types").ObjectExpression;
export declare function OBJECT_PROP(props: ObjectPropertyProps): ObjectProperty;
export declare function OBJECT_METHOD(props: ObjectMethodProps): ObjectMethod;
export declare const SPREAD_OBJECT: typeof spreadElement;
export declare function MEMBER(props: MemberProps): import("@babel/types").MemberExpression;
