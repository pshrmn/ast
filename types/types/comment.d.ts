import { Node } from "@babel/types";
export declare type CommentLocation = "leading" | "trailing";
export declare function comment(node: Node, comment: string, where: CommentLocation): Node;
export declare function multiLineComment(node: Node, comments: Array<string>, where: CommentLocation): Node;
export declare function slashComment(node: Node, comment: string, where: CommentLocation): Node;
