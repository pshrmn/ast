import "jest";
import { stringify, types } from "../../src";

describe("asStatement", () => {
  it("returns expression wrapped as a statement", () => {
    const value = types.asStatement(
      types.call("fn", [])
    );
    expect(stringify([value])).toBe("fn();");
  });
});
