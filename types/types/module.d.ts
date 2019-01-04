import { FunctionDeclaration, TSDeclareFunction, ClassDeclaration, Expression } from "@babel/types";
export declare function importNamed(names: Array<string>, src: string): import("@babel/types").ImportDeclaration;
export declare function importDefault(name: string, src: string): import("@babel/types").ImportDeclaration;
export declare function exportDefault(id: FunctionDeclaration | TSDeclareFunction | ClassDeclaration | Expression): import("@babel/types").ExportDefaultDeclaration;
