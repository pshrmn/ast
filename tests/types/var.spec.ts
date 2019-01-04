import "jest";

import { stringify, types } from "../../src";

describe("constVar", () => {
  it("returns const variable declaration", () => {
    const value = types.constVar("x", types.call("fn", []));
    expect(stringify([value])).toBe("const x = fn();");
  });
});

describe("letVar", () => {
  it("returns let variable declaration", () => {
    const value = types.letVar("x", types.call("fn", []));
    expect(stringify([value])).toBe("let x = fn();");
  });
});

describe("varVar", () => {
  it("returns const variable declaration", () => {
    const value = types.varVar("x", types.call("fn", []));
    expect(stringify([value])).toBe("var x = fn();");
  });
});