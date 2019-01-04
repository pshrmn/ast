import "jest";

import { stringify, types } from "../../src";

describe("id", () => {
  it("returns an identifier node", () => {
    const value = types.asStatement(
      types.id("hi")
    );
    expect(stringify([value])).toBe("hi;");
  });
});

describe("num", () => {
  it("returns a number node", () => {
    const value = types.asStatement(
      types.num(5)
    );
    expect(stringify([value])).toBe("5;");
  });
});

describe("str", () => {
  it("returns a string node", () => {
    const value = types.asStatement(
      types.str("hi")
    );
    expect(stringify([value])).toBe(`"hi";`);
  });
});

describe("bool", () => {
  it("returns a bool node", () => {
    const value = types.asStatement(
      types.bool(false)
    );
    expect(stringify([value])).toBe("false;");
  });
});
