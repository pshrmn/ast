import {
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  exportDefaultDeclaration,
  exportNamedDeclaration
} from "@babel/types";

import { id, str } from "./primitives";

import {
  FunctionDeclaration,
  TSDeclareFunction,
  ClassDeclaration,
  Expression
} from "@babel/types";

export function importNamed(names: Array<string>, src: string) {
  return importDeclaration(
    names.map(name => importSpecifier(id(name), id(name))),
    str(src)
  );
}

export function importDefault(name: string, src: string) {
  return importDeclaration(
    [
      importDefaultSpecifier(id(name))
    ],
    str(src)
  );
}

export function exportDefault(
  id: FunctionDeclaration | TSDeclareFunction | ClassDeclaration | Expression
) {
  return exportDefaultDeclaration(id);
}
