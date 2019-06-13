import {
  addComment
} from "@babel/types";

import {
  Node
} from "@babel/types";

export type CommentLocation = "leading" | "trailing";

export interface CommentProps {
  node: Node;
  comment: string;
  where: CommentLocation;
  line?: boolean; // true for slash comment, false for block
}

export interface MultiLineCommentProps {
  node: Node;
  comments: Array<string>;
  where: CommentLocation;
}

export function COMMENT(props: CommentProps) {
  return addComment(
    props.node,
    props.where,
    ` ${props.comment} `,
    props.line
  );
}

// slash comment
export function SLASH_COMMENT(props: CommentProps) {
  return addComment(
    props.node,
    props.where,
    ` ${props.comment}`,
    true
  );
}

function fmtComments(comments: Array<string>): string {
  return `\n * ${comments.join("\n * ")}\n `;
}

// multi-line block comment
export function MULTI_LINE_COMMENT(props: MultiLineCommentProps) {
  return addComment(
    props.node,
    props.where,
    fmtComments(props.comments),
    false
  );
}
