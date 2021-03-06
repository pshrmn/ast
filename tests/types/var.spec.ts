import "jest";

import { stringify, types } from "../../src";

describe("CONST", () => {
  it("returns const variable declaration", () => {
    const value = types.CONST({
      name: "x",
      init: types.CALL({ callee: "fn" })
    });
    expect(
      stringify`${value}`
    ).toBe("const x = fn();");
  });
});

describe("LET", () => {
  it("returns let variable declaration", () => {
    const value = types.LET({
      name: "x",
      init: types.CALL({ callee: "fn" })
    });
    expect(
      stringify`${value}`
    ).toBe("let x = fn();");
  });
});

describe("VAR", () => {
  it("returns const variable declaration", () => {
    const value = types.VAR({
      name: "x",
      init: types.CALL({ callee: "fn" })
    });
    expect(
      stringify`${value}`
    ).toBe("var x = fn();");
  });
});