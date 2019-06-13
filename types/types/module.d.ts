import { Declaration, FunctionDeclaration, ClassDeclaration, Expression, ExportSpecifier } from "@babel/types";
export interface ImportNamedProps {
    names: Array<string>;
    source: string;
}
export interface ImportDefaultProps {
    name: string;
    source: string;
}
export interface ExportNamedProps {
    specifiers: Array<ExportSpecifier>;
    source?: string | null;
}
export interface ExportSpecifierProps {
    local: string;
    exported?: string;
}
export declare function IMPORT_NAMED(props: ImportNamedProps): import("@babel/types").ImportDeclaration;
export declare function IMPORT_DEFAULT(props: ImportDefaultProps): import("@babel/types").ImportDeclaration;
export declare function EXPORT_DEFAULT(declaration: FunctionDeclaration | ClassDeclaration | Expression): import("@babel/types").ExportDefaultDeclaration;
export declare function EXPORT_DECLARATION(declaration: Declaration): import("@babel/types").ExportNamedDeclaration;
export declare function EXPORT_NAMED(props: ExportNamedProps): import("@babel/types").ExportNamedDeclaration;
export declare function EXPORT_SPECIFIER(props: ExportSpecifierProps): ExportSpecifier;
