# @posh/ast

Generate JavaScript modules from AST nodes.

Uses Babel's `@babel/types` and `@babel/generator` packages.

**Note:** Not all node types are wrapped by `@posh/ast`. For the ones that are not, the types from `@babel/types` should be used.

```bash
npm install @posh/ast
```

## Usage

```js
import { stringify, types } from "@posh/ast";

function createModule() {
  const myVar = types.CONST("myVar", types.STRING("hi!"));
  const exportVar = types.EXPORT_DEFAULT(types.ID("myVar"));

  const code = stringify`
${myVar}
${exportVar}
`;
  /*
   * const myVar = "hi!";
   * export default myVar;
   */
}

function createComponent() {
  const importReact = types.IMPORT_DEFAULT("React", "react");
  const MyComponent = types.FUNCTION(
    "MyComponent",
    [types.ID("props")],
    [
      types.RETURN(types.STRING("test"))
    ]
  );
  const exportComponent = types.EXPORT_DEFAULT("MyComponent");
  const code = stringify`
${importReact}

${MyComponent}

${exportComponent}
`;
  /*
   * import React from "react"
   *
   * function MyComponent(props) {
   *   return "test";
   * }
   *
   * export default MyComponent;
   */
}
```
