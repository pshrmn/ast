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
