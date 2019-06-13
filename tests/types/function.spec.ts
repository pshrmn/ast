import "jest";
import dedent from "dedent";
import * as BABEL_TYPES from "@babel/types";

import { stringify, types } from "../../src";

describe("CALL", () => {
  it("returns function being called", () => {
    const value = types.AS_STATEMENT(
      types.CALL({
        callee: "fn"
      })
    );
    expect(
      stringify`${value}`
    ).toBe("fn();");
  });

  it("passes arguments to function call", () => {
    const value = types.AS_STATEMENT(
      types.CALL({
        callee: "fn",
        arguments: [types.STRING("hi")]
      })
    );
    expect(
      stringify`${value}`
    ).toBe(`fn("hi");`);
  });

  describe("callee", () => {
    it("works with a string", () => {
      const value = types.AS_STATEMENT(
        types.CALL({
          callee: "fn"
        })
      );
      expect(
        stringify`${value}`
      ).toBe("fn();");
    });

    it("works with an identifier", () => {
      const value = types.AS_STATEMENT(
        types.CALL({
          callee: types.ID("id")
        })
      );
      expect(
        stringify`${value}`
      ).toBe("id();");
    });

    it("works with a member expression", () => {
      const value = types.AS_STATEMENT(
        types.CALL({
          callee: types.MEMBER({
            object:  types.ID("one"),
            property:  types.ID("two")
          })
        })
      );
      expect(
        stringify`${value}`
      ).toBe("one.two();");
    });
  });
});

describe("FUNCTION", () => {
  it("returns a function node", () => {
    const value = types.FUNCTION({
      id: "test",
      body: [
        types.CONST({
          name: "x",
          init: types.NUMBER(1)
        }),
        types.RETURN(types.ID("x"))
      ]
    });
    expect(
      stringify`${value}`
    ).toBe(dedent`
      function test() {
        const x = 1;
        return x;
      }
    `);
  });
});

describe("ARROW_FUNCTION", () => {
  it("works with an array of statements", () => {
    const value = types.AS_STATEMENT(
      types.ARROW_FUNCTION({
        body: [
          types.CONST({
            name: "x",
            init: types.NUMBER(1)
          }),
          types.RETURN(types.ID("x"))
        ]
      })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      () => {
        const x = 1;
        return x;
      };
    `);
  });

  it("works with a single expression", () => {
    const value = types.AS_STATEMENT(
      types.ARROW_FUNCTION({
        body: types.NUMBER(1)
      })
    );
    expect(
      stringify`${value}`
    ).toBe(dedent`
      () => 1;
    `);
  });
});


describe("returns", () => {
  it("returns return statement", () => {
    const value = types.RETURN(
      types.STRING("hi!")
    );
    expect(
      stringify`${value}`
    ).toBe(`return "hi!";`);
  });
});
