import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("OBJECT", () => {
  it("returns an objectExpression node", () => {
    const value = types.AS_STATEMENT(
      types.OBJECT([
        types.OBJECT_PROP({
          key: types.ID("x"),
          value: types.STRING("y")
        })
      ])
    );
    // AS_STATEMENT wraps in parentheses
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        x: "y"
      });

    `);
  });

  it("works with multiple properties", () => {
    const value = types.AS_STATEMENT(
      types.OBJECT([
        types.OBJECT_PROP({
          key: types.ID("x"),
          value: types.STRING("X")
        }),
        types.OBJECT_PROP({
          key: types.ID("y"),
          value: types.STRING("Y")
        }),
        types.OBJECT_METHOD({
          key: types.ID("z")
        })
      ])
    );
    // AS_STATEMENT wraps in parentheses, properties get
    // extra newlines (TODO: look into for custom printer)
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        x: "X",
        y: "Y",

        z() {}

      });
    `);
  });
});

describe("OBJECT_PROP", () => {
  it("returns an objectProperty node with expected value", () => {
    const value = types.AS_STATEMENT(
      types.OBJECT([
        types.OBJECT_PROP({
          key: types.ID("x"),
          value: types.STRING("y")
        })
      ])
    );
    // AS_STATEMENT wraps in parentheses
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        x: "y"
      });
    `);
  });
});

describe("OBJECT_METHOD", () => {
  it("returns an objectMethod node with expected value", () => {
    const value = types.AS_STATEMENT(
      types.OBJECT([
        types.OBJECT_METHOD({
          key: types.ID("x"),
          params: [types.ID("y")],
          body: [
            types.AS_STATEMENT(
              types.CALL({
                callee: "log",
                arguments: [types.ID("y")]
              })
            )
          ]
        })
      ])
    );
    // AS_STATEMENT wraps in parentheses, objectMethod gets trailing
    // newline
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({
        x(y) {
          log(y);
        }

      });
    `);
  });
});

describe("SPREAD_OBJECT", () => {
  it("spread the object", () => {
    const value = types.AS_STATEMENT(types.OBJECT([
      types.SPREAD_OBJECT(types.ID("x"))
    ]));
    // AS_STATEMENT wraps in parentheses, SPREAD_OBJECT doesn't
    // get newline
    expect(
      stringify`${value}`
    ).toBe(dedent`
      ({ ...x
      });
    `);
  });
});

describe("MEMBER", () => {
  it("does not compute by default", () => {
    const value = types.AS_STATEMENT(
      types.MEMBER({
        object: types.ID("x"),
        property: types.ID("y")
      })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      x.y;
    `);
  });

  it("computes when computed=true", () => {
    const value = types.AS_STATEMENT(
      types.MEMBER({
        object: types.ID("x"),
        property: types.STRING("y"),
        computed: true
      })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      x["y"];
    `);
  });
});