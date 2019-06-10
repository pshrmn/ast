import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("CALL", () => {
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

describe("FUNCTION", () => {
  it("returns a function node", () => {
    const value = types.FUNCTION("test", [], [
      types.CONST("x", types.NUMBER(1)),
      types.RETURN(types.ID("x"))
    ]);
    expect(stringify([value])).toBe(dedent`
      function test() {
        const x = 1;
        return x;
      }
    `);
  });
});

describe("ARROW_FUNCTION", () => {
  it("works with an array of statements", () => {
    const value = types.AS_STATEMENT(
      types.ARROW_FUNCTION([], [
        types.CONST("x", types.NUMBER(1)),
        types.RETURN(types.ID("x"))
      ])
    );
    expect(stringify([value])).toBe(dedent`
      () => {
        const x = 1;
        return x;
      };
    `);
  });

  it("works with a single expression", () => {
    const value = types.AS_STATEMENT(
      types.ARROW_FUNCTION([], types.NUMBER(1))
    );
    expect(stringify([value])).toBe(dedent`
      () => 1;
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
