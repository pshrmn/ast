import "jest";

import { stringify, types } from "../src";

describe("stringify", () => {
  it("returns string of nodes", () => {
    const value = types.constVar("x", types.call("fn", []));
    expect(stringify([value])).toBe("const x = fn();");
  });

  it("inserts given number of newlines after code", () => {
    const value = types.constVar("x", types.call("fn", []));
    expect(
      stringify([value], 2)
    ).toBe("const x = fn();\n\n");
  });
});
