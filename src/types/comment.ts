import {
  addComment
} from "@babel/types";

import {
  Node
} from "@babel/types";

export type CommentLocation = "leading" | "trailing";

// block comment
export function comment(node: Node, comment: string, where: CommentLocation) {
  return addComment(node, where, ` ${comment} `, false);
}

function fmtComments(comments: Array<string>): string {
  return `\n * ${comments.join("\n * ")}\n `;
}

// multi-line block comment
export function multiLineComment(node: Node, comments: Array<string>, where: CommentLocation) {
  return addComment(node, where, fmtComments(comments));
}

// slash comment
export function slashComment(node: Node, comment: string, where: CommentLocation) {
  return addComment(node, where, ` ${comment}`, true);
}
