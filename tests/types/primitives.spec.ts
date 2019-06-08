import "jest";

import { stringify, types } from "../../src";

describe("ID", () => {
  it("returns an identifier node", () => {
    const value = types.AS_STATEMENT(
      types.ID("hi")
    );
    expect(stringify([value])).toBe("hi;");
  });
});

describe("NUMBER", () => {
  it("returns a number node", () => {
    const value = types.AS_STATEMENT(
      types.NUMBER(5)
    );
    expect(stringify([value])).toBe("5;");
  });
});

describe("STRING", () => {
  it("returns a string node", () => {
    const value = types.AS_STATEMENT(
      types.STRING("hi")
    );
    expect(stringify([value])).toBe(`"hi";`);
  });
});

describe("BOOLEAN", () => {
  it("returns a boolean node", () => {
    const value = types.AS_STATEMENT(
      types.BOOLEAN(false)
    );
    expect(stringify([value])).toBe("false;");
  });
});
