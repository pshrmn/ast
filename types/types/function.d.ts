import { returnStatement } from "@babel/types";
import { Expression, CallExpression, Identifier, Pattern, RestElement, Statement, SpreadElement, JSXNamespacedName, ArgumentPlaceholder } from "@babel/types";
export interface CallProps {
    callee: Expression | string;
    arguments?: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
}
export interface FunctionProps {
    id: string | Identifier | null | undefined;
    params?: Array<Identifier | Pattern | RestElement>;
    body: Array<Statement>;
    generator?: boolean;
    async?: boolean;
}
export interface ArrowFunctionProps {
    params?: Array<Identifier | Pattern | RestElement>;
    body: Array<Statement> | Expression;
    async?: boolean;
}
export declare function CALL(props: CallProps): CallExpression;
export declare function FUNCTION(props: FunctionProps): import("@babel/types").FunctionDeclaration;
export declare function ARROW_FUNCTION(props: ArrowFunctionProps): import("@babel/types").ArrowFunctionExpression;
export declare const RETURN: typeof returnStatement;
