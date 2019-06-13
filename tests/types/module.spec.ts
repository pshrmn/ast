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
