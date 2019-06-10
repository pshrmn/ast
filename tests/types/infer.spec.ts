import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("INFER", () => {
  it("returns a string node when given a string", () => {
    const value = types.AS_STATEMENT(
      types.INFER("test")
    );
    expect(
      stringify`${value}`
    ).toBe(`"test";`);
  });

  it("returns a number node when given a number", () => {
    const value = types.AS_STATEMENT(
      types.INFER(3.14)
    );
    expect(
      stringify`${value}`
    ).toBe("3.14;");
  });

  it("returns a bool node when given a boolean", () => {
    const value = types.AS_STATEMENT(
      types.INFER(false)
    );
    expect(
      stringify`${value}`
    ).toBe("false;");
  });

  it("returns an object node when given an object", () => {
    const value = types.AS_STATEMENT(
      types.INFER({ a: "A" })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        a: "A"
      });
    `);
  });

  it("returns an array node when given an array", () => {
    const value = types.AS_STATEMENT(
      types.INFER([1, 2, "3"])
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      [1, 2, "3"];
    `);
  });

  it("returns undefined when given undefined value", () => {
    const value = types.AS_STATEMENT(
      types.INFER(undefined)
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      undefined;
    `);
  });

  it("returns null when given null value", () => {
    const value = types.AS_STATEMENT(
      types.INFER(null)
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      null;
    `);
  });

  it("works recursively", () => {
    const value = types.AS_STATEMENT(
      types.INFER({ a: [1, 2, { b: "B" }] })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        a: [1, 2, {
          b: "B"
        }]
      });
    `);
  });

  it("throws an error when given a function", () => {
    expect(() => {
      const value = types.INFER(
        // @ts-ignore
        function x() {}
      )
    }).toThrow("INFER does not work with functions");
  });
});