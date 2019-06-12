import "jest";

import { stringify, types } from "../../src";

describe("NEW", () => {
  it("returns a new expression", () => {
    const value = types.AS_STATEMENT(
      types.NEW(types.ID("Date"), [])
    );
    expect(
      stringify`${value}`
    ).toBe("new Date();")
  })
});

describe("BINARY", () => {
  it("returns a binary expression", () => {
    const value = types.AS_STATEMENT(
      types.BINARY(types.ID("value"), "<", types.NUMBER(7))
    );
    expect(
      stringify`${value}`
    ).toBe("value < 7;");
  });
});
