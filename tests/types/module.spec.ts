import "jest";

import { stringify, types } from "../../src";

describe("importDefault", () => {
  it("returns default import string", () => {
    const value = types.importDefault("thing", "somewhere")
    expect(stringify([value])).toBe(`import thing from "somewhere";`);
  });
});

describe("importNamed", () => {
  it("returns named import string", () => {
    const value = types.importNamed(["thing"], "somewhere")
    expect(stringify([value])).toBe(`import { thing } from "somewhere";`);
  });
});


describe("exportDefault", () => {
  it("returns default export string", () => {
    const value = types.exportDefault(types.id("thing"))
    expect(stringify([value])).toBe(`export default thing;`);
  });
});
