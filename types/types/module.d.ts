import { FunctionDeclaration, TSDeclareFunction, ClassDeclaration, Expression } from "@babel/types";
export declare function IMPORT_NAMED(names: Array<string>, src: string): import("@babel/types").ImportDeclaration;
export declare function IMPORT_DEFAULT(name: string, src: string): import("@babel/types").ImportDeclaration;
export declare function EXPORT_DEFAULT(id: FunctionDeclaration | TSDeclareFunction | ClassDeclaration | Expression): import("@babel/types").ExportDefaultDeclaration;
