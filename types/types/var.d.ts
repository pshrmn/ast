import { Expression } from "@babel/types";
export declare function constVar(name: string, init: Expression): import("@babel/types").VariableDeclaration;
export declare function letVar(name: string, init: Expression): import("@babel/types").VariableDeclaration;
export declare function varVar(name: string, init: Expression): import("@babel/types").VariableDeclaration;
