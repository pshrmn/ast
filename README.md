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
  const myVar = types.constVar("myVar", types.str("hi!"));
  const exportVar = types.exportDefault(types.id("myVar"));

  const code = "";
  code += stringify([myVar, exportVar], 1);
  /*
   * const myVar = "hi!";
   * export default myVar;
   */
}

function createComponent() {
  const importReact = types.importDefault("React", "react");
  const MyComponent = types.func(
    "MyComponent",
    [types.id("props")],
    [
      types.returnValue(types.str("test"))
    ]
  );
  const exportComponent = types.exportDefault("MyComponent");
  const code = "";
  code += stringify([importReact], 2);
  code += stringify([MyComponent]), 2);
  code += stringify([exportComponent], 1);
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
