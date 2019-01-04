import {
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  exportDefaultDeclaration
} from "@babel/types";

import { id, str } from "./primitives";

import {
  FunctionDeclaration,
  TSDeclareFunction,
  ClassDeclaration,
  Expression
} from "@babel/types";

// import { ${name} } from "${src}";
export function importNamed(name: string, src: string) {
  return importDeclaration(
    [
      importSpecifier(id(name), id(name))
    ],
    str(src)
  );
}

// import ${name} from "${src}";
export function importDefault(name: string, src: string) {
  return importDeclaration(
    [
      importDefaultSpecifier(id(name))
    ],
    str(src)
  );
}

// export ${id};
export function exportDefault(
  id: FunctionDeclaration | TSDeclareFunction | ClassDeclaration | Expression
) {
  return exportDefaultDeclaration(id);
}
