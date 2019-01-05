import "jest";

import { stringify, types } from "../../src";

describe("array", () => {
  it("returns an arrayExpression node", () => {
    const value = types.asStatement(
      types.array([
        types.num(1),
        types.num(2),
        types.num(3)
      ])
    );
    expect(stringify([value])).toBe("[1, 2, 3];");
  });
});
