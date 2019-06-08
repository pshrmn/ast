import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("call", () => {
  it("returns function being called", () => {
    const value = types.AS_STATEMENT(
      types.CALL("fn", [])
    );
    expect(stringify([value])).toBe("fn();");
  });

  it("passes arguments to function call", () => {
    const value = types.AS_STATEMENT(
      types.CALL("fn", [types.STRING("hi")])
    );
    expect(stringify([value])).toBe(`fn("hi");`);
  });
});

describe("func", () => {
  it("returns a function node", () => {
    const value = types.FUNCTION("test", [], [
      types.CONST("x", types.NUMBER(1)),
      types.RETURN(types.ID("x"))
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
    const value = types.RETURN(
      types.STRING("hi!")
    );
    expect(stringify([value])).toBe(`return "hi!";`);
  });
});
