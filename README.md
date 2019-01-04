# @posh/ast

Generate JavaScript modules from AST nodes.

```bash
npm install @posh/ast
```

## Usage

```js
import { stringify, types } from "@posh/ast";

function createModule() {
  const myVar = types.constVar("myVar", types.str("hi!"));
  const exportComponent = types.exportDefault(types.id("myVar"));

  const code = "";
  code += stringify([myVar, exportComponent], 1);
  /*
   * const myVar = "hi!";
   * export default myVar;
   */
}
```
