import {
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  exportDefaultDeclaration,
  exportNamedDeclaration
} from "@babel/types";

import { ID, STRING } from "./primitives";

import {
  FunctionDeclaration,
  TSDeclareFunction,
  ClassDeclaration,
  Expression
} from "@babel/types";

export function IMPORT_NAMED(names: Array<string>, src: string) {
  return importDeclaration(
    names.map(name => importSpecifier(ID(name), ID(name))),
    STRING(src)
  );
}

export function IMPORT_DEFAULT(name: string, src: string) {
  return importDeclaration(
    [
      importDefaultSpecifier(ID(name))
    ],
    STRING(src)
  );
}

export function EXPORT_DEFAULT(
  id: FunctionDeclaration | TSDeclareFunction | ClassDeclaration | Expression
) {
  return exportDefaultDeclaration(id);
}
