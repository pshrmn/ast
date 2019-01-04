import "jest";
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
