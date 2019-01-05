import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("object", () => {
  it("returns an objectExpression node", () => {
    const value = types.asStatement(types.object([
      types.objProp(types.id("x"), types.str("y"))
    ]));
    // asStatement wraps in parentheses
    expect(stringify([value])).toBe(dedent`
      ({
        x: "y"
      });
    `);
  });

  it("works with multiple properties", () => {
    const value = types.asStatement(types.object([
      types.objProp(types.id("x"), types.str("X")),
      types.objProp(types.id("y"), types.str("Y")),
      types.objMethod("method", types.id("z"), [], [] )
    ]));
    // asStatement wraps in parentheses, properties get
    // extra newlines (TODO: look into for custom printer)
    expect(stringify([value])).toBe(dedent`
      ({
        x: "X",
        y: "Y",

        z() {}

      });
    `);
  });
});

describe("objProp", () => {
  it("returns an objectProperty node with expected value", () => {
    const value = types.asStatement(types.object([
      types.objProp(types.id("x"), types.str("y"))
    ]));
    // asStatement wraps in parentheses
    expect(stringify([value])).toBe(dedent`
      ({
        x: "y"
      });
    `);
  });
});

describe("objMethod", () => {
  it("returns an objectMethod node with expected value", () => {
    const value = types.asStatement(types.object([
      types.objMethod(
        "method",
        types.id("x"),
        [types.id("y")],
        [
          types.asStatement(
            types.call(
              "log",
              [types.id("y")]
            )
          )
        ]
      )
    ]));
    // asStatement wraps in parentheses, objectMethod gets trailing
    // newline
    expect(stringify([value])).toBe(dedent`
      ({
        x(y) {
          log(y);
        }

      });
    `);
  });
});

describe("objSpread", () => {
  const value = types.asStatement(types.object([
    types.objSpread(types.id("x"))
  ]));
  // asStatement wraps in parentheses, objSpread doesn't
  // get newline
  expect(stringify([value])).toBe(dedent`
    ({ ...x
    });
  `);
});