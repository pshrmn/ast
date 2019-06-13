import {
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  exportDefaultDeclaration
} from "@babel/types";

import { ID, STRING } from "./primitives";

import {
  FunctionDeclaration,
  ClassDeclaration,
  Expression
} from "@babel/types";

export interface ImportNamedProps {
  names: Array<string>;
  source: string;
}

export interface ImportDefaultProps {
  name: string;
  source: string;
}

export function IMPORT_NAMED(props: ImportNamedProps,) {
  return importDeclaration(
    props.names.map(name => importSpecifier(ID(name), ID(name))),
    STRING(props.source)
  );
}

export function IMPORT_DEFAULT(props: ImportDefaultProps) {
  return importDeclaration(
    [importDefaultSpecifier(ID(props.name))],
    STRING(props.source)
  );
}

export function EXPORT_DEFAULT(
  declaration: FunctionDeclaration | ClassDeclaration | Expression
) {
  return exportDefaultDeclaration(declaration);
}
