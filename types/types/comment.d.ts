import { Node } from "@babel/types";
export declare type CommentLocation = "leading" | "trailing";
export declare function COMMENT(node: Node, comment: string, where: CommentLocation): Node;
export declare function MULTI_LINE_COMMENT(node: Node, comments: Array<string>, where: CommentLocation): Node;
export declare function SLASH_COMMENT(node: Node, comment: string, where: CommentLocation): Node;
