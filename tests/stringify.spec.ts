import "jest";

import { stringify, types } from "../src";

describe("stringify", () => {
  it("returns string of nodes", () => {
    const value = types.CONST("x", types.CALL("fn", []));
    expect(
      stringify`${value}`
    ).toBe("const x = fn();");
  });

  it("correctly interlaces with strings", () => {
    const value = types.CONST("x", types.CALL("fn", []));
    expect(
      stringify`${value}
// test`
    ).toBe("const x = fn();\n// test");
  });
});
