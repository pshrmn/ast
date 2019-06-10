import { returnStatement } from "@babel/types";
import { Expression, CallExpression, Identifier, Pattern, RestElement, TSParameterProperty, Statement } from "@babel/types";
export declare function CALL(name: string, args: Array<Expression>): CallExpression;
export declare function FUNCTION(name: string, params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, body: Array<Statement>): import("@babel/types").FunctionDeclaration;
export declare function ARROW_FUNCTION(params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, body: Expression | Array<Statement>): import("@babel/types").ArrowFunctionExpression;
export declare const RETURN: typeof returnStatement;
