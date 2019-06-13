import { FunctionDeclaration, ClassDeclaration, Expression } from "@babel/types";
export interface ImportNamedProps {
    names: Array<string>;
    source: string;
}
export interface ImportDefaultProps {
    name: string;
    source: string;
}
export declare function IMPORT_NAMED(props: ImportNamedProps): import("@babel/types").ImportDeclaration;
export declare function IMPORT_DEFAULT(props: ImportDefaultProps): import("@babel/types").ImportDeclaration;
export declare function EXPORT_DEFAULT(declaration: FunctionDeclaration | ClassDeclaration | Expression): import("@babel/types").ExportDefaultDeclaration;
