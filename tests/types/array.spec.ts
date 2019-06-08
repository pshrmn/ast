import "jest";

import { stringify, types } from "../../src";

describe("ARRAY", () => {
  it("returns an arrayExpression node", () => {
    const value = types.AS_STATEMENT(
      types.ARRAY([
        types.NUMBER(1),
        types.NUMBER(2),
        types.NUMBER(3)
      ])
    );
    expect(stringify([value])).toBe("[1, 2, 3];");
  });
});
