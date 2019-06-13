import "jest";

import { stringify, types } from "../../src";

describe("NEW", () => {
  it("returns a new expression", () => {
    const value = types.AS_STATEMENT(
      types.NEW({
        callee: types.ID("Date")
      })
    );
    expect(
      stringify`${value}`
    ).toBe("new Date();")
  })
});

describe("BINARY", () => {
  it("returns a binary expression", () => {
    const value = types.AS_STATEMENT(
      types.BINARY({
        left: types.ID("value"),
        operator: "<",
        right: types.NUMBER(7)
      })
    );
    expect(
      stringify`${value}`
    ).toBe("value < 7;");
  });

  it("correctly chains binary expressions", () => {
    const value = types.AS_STATEMENT(
      types.BINARY({
        left: types.BINARY({
          left: types.NUMBER(6),
          operator: "+",
          right: types.NUMBER(7)
        }),
        operator: "*",
        right: types.NUMBER(3)
      })
    );
    expect(
      stringify`${value}`
    ).toBe("(6 + 7) * 3;");
  });
});
