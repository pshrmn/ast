import { Expression, CallExpression, LVal, Statement } from "@babel/types";
export declare function call(name: string, args: Array<Expression>): CallExpression;
export declare function func(name: string, params: Array<LVal>, body: Array<Statement>): import("@babel/types").FunctionDeclaration;
export declare function returnValue(arg: Expression): import("@babel/types").ReturnStatement;
