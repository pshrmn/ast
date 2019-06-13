import "jest";
import { stringify, types } from "../../src";

describe("AS_STATEMENT", () => {
  it("returns expression wrapped as a statement", () => {
    const value = types.AS_STATEMENT(
      types.CALL({ callee: "fn" })
    );
    expect(
      stringify`${value}`
    ).toBe("fn();");
  });
});
