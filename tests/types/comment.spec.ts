import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("comment", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.comment(
        types.asStatement(
          types.call("fn", [])
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
      const value = types.comment(
        types.asStatement(
          types.call("fn", [])
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

describe("multiLineComment", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.multiLineComment(
        types.asStatement(
          types.call("fn", [])
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

  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.multiLineComment(
        types.asStatement(
          types.call("fn", [])
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

describe("slashComment", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.slashComment(
        types.asStatement(
          types.call("fn", [])
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
      const value = types.slashComment(
        types.asStatement(
          types.call("fn", [])
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
