import {
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  exportDefaultDeclaration,
  exportNamedDeclaration,
  exportSpecifier
} from "@babel/types";

import { ID, STRING } from "./primitives";

import {
  Declaration,
  FunctionDeclaration,
  ClassDeclaration,
  Expression,
  ExportSpecifier
} from "@babel/types";

export interface ImportNamedProps {
  names: Array<string>;
  source: string;
}

export interface ImportDefaultProps {
  name: string;
  source: string;
}

export interface ExportNamedProps {
  specifiers: Array<ExportSpecifier>;
  source?: string | null
}

export interface ExportSpecifierProps {
  local: string;
  exported?: string
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

export function EXPORT_DECLARATION(declaration: Declaration) {
  return exportNamedDeclaration(
    declaration,
    [],
    null
  )
}

export function EXPORT_NAMED(props: ExportNamedProps) {
  return exportNamedDeclaration(
    undefined,
    props.specifiers || [],
    typeof props.source === "string" ? STRING(props.source) : props.source
  );
}

export function EXPORT_SPECIFIER(props: ExportSpecifierProps) {
  return exportSpecifier(
    ID(props.local),
    ID(props.exported || props.local)
  )
}
