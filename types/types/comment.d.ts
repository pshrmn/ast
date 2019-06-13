import { Node } from "@babel/types";
export declare type CommentLocation = "leading" | "trailing";
export interface CommentProps {
    node: Node;
    comment: string;
    where: CommentLocation;
    line?: boolean;
}
export interface MultiLineCommentProps {
    node: Node;
    comments: Array<string>;
    where: CommentLocation;
}
export declare function COMMENT(props: CommentProps): Node;
export declare function SLASH_COMMENT(props: CommentProps): Node;
export declare function MULTI_LINE_COMMENT(props: MultiLineCommentProps): Node;
