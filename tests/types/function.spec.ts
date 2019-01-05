import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("call", () => {
  it("returns function being called", () => {
    const value = types.asStatement(
      types.call("fn", [])
    );
    expect(stringify([value])).toBe("fn();");
  });

  it("passes arguments to function call", () => {
    const value = types.asStatement(
      types.call("fn", [types.str("hi")])
    );
    expect(stringify([value])).toBe(`fn("hi");`);
  });
});

describe("func", () => {
  it("returns a function node", () => {
    const value = types.func("test", [], [
      types.constVar("x", types.num(1)),
      types.returns(types.id("x"))
    ])
    expect(stringify([value])).toBe(dedent`
      function test() {
        const x = 1;
        return x;
      }
    `);
  });
});

describe("returns", () => {
  it("returns return statement", () => {
    const value = types.returns(
      types.str("hi!")
    );
    expect(stringify([value])).toBe(`return "hi!";`);
  });
});
