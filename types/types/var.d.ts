import { Expression } from "@babel/types";
export interface VariableProps {
    name: string;
    init: Expression;
}
export declare function CONST(props: VariableProps): import("@babel/types").VariableDeclaration;
export declare function LET(props: VariableProps): import("@babel/types").VariableDeclaration;
export declare function VAR(props: VariableProps): import("@babel/types").VariableDeclaration;
