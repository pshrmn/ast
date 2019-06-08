import { Expression } from "@babel/types";
export declare function CONST(name: string, init: Expression): import("@babel/types").VariableDeclaration;
export declare function LET(name: string, init: Expression): import("@babel/types").VariableDeclaration;
export declare function VAR(name: string, init: Expression): import("@babel/types").VariableDeclaration;
