import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("COMMENT", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        "this is a comment",
        "leading"
      );

      expect(stringify([value])).toBe(dedent`
        /* this is a comment */
        fn();
      `);
    });
  });

  describe("trailing", () => {
    it("attaches a comment before the node", () => {
      const value = types.COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        "this is a comment",
        "trailing"
      );

      expect(stringify([value])).toBe(dedent`
        fn();
        /* this is a comment */
      `);
    });
  });
});

describe("MULTI_LINE_COMMENT", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.MULTI_LINE_COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        ["one", "two"],
        "leading"
      );

      expect(stringify([value])).toBe(dedent`
        /*
         * one
         * two
         */
        fn();
      `);
    });
  });

  describe("trailing", () => {
    it("attaches a comment after the node", () => {
      const value = types.MULTI_LINE_COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        ["one", "two"],
        "trailing"
      );

      expect(stringify([value])).toBe(dedent`
        fn();
        /*
         * one
         * two
         */
      `);
    });
  });
});

describe("SLASH_COMMENT", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.SLASH_COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        "this is a comment",
        "leading"
      );

      expect(stringify([value])).toBe(dedent`
        // this is a comment
        fn();
      `);
    });
  });

  describe("trailing", () => {
    it("attaches a comment before the node", () => {
      const value = types.SLASH_COMMENT(
        types.AS_STATEMENT(
          types.CALL("fn", [])
        ),
        "this is a comment",
        "trailing"
      );

      expect(stringify([value])).toBe(dedent`
        fn(); // this is a comment
      `);
    });
  });
});
