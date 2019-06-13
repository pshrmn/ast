import "jest";

import { stringify, types } from "../../src";

describe("IMPORT_DEFAULT", () => {
  it("returns default import string", () => {
    const value = types.IMPORT_DEFAULT({
      name: "thing",
      source: "somewhere"
    })
    expect(
      stringify`${value}`
    ).toBe(`import thing from "somewhere";`);
  });
});

describe("IMPORT_NAMED", () => {
  it("returns named import string", () => {
    const value = types.IMPORT_NAMED({
      names: ["thing"],
      source: "somewhere"
    })
    expect(
      stringify`${value}`
    ).toBe(`import { thing } from "somewhere";`);
  });
});


describe("EXPORT_DEFAULT", () => {
  it("returns default export string", () => {
    const value = types.EXPORT_DEFAULT(types.ID("thing"))
    expect(
      stringify`${value}`
    ).toBe(`export default thing;`);
  });
});

describe("EXPORT_DECLARATION", () => {
  it("returns named declaration export string", () => {
    const value = types.EXPORT_DECLARATION(
      types.CONST({
        name: "thing",
        init: types.NUMBER(6)
      })
    );
    expect(
      stringify`${value}`
    ).toBe(`export const thing = 6;`);
  });
});

describe("EXPORT_NAMED & EXPORT_SPECIFIER", () => {
  it("returns named export string", () => {
    const value = types.EXPORT_NAMED({
      specifiers: [
        types.EXPORT_SPECIFIER({
          local: "x"
        }),
        types.EXPORT_SPECIFIER({
          local: "y",
          exported: "z"
        })
      ]
    });
    expect(
      stringify`${value}`
    ).toBe(`export { x, y as z };`);
  });
});
