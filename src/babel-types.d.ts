import * as t from "@babel/types";

declare module "@babel/types" {
  function addComment(
    node: t.Node,
    type: any,
    content: string,
    line?: boolean
  ): t.Node;
}