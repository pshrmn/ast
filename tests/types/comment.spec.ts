import "jest";
import dedent from "dedent";

import { stringify, types } from "../../src";

describe("COMMENT", () => {
  describe("where", () => {
    it("attaches a comment before the node when where=leading", () => {
      const value = types.COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        comment: "this is a comment",
        where: "leading"
      });

      expect(
        stringify`${value}`
      ).toBe(dedent`
        /* this is a comment */
        fn();
      `);
    });

    it("attaches a comment after the node when where=trailing", () => {
      const value = types.COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        comment: "this is a comment",
        where: "trailing"
      }
      );

      expect(
        stringify`${value}`
      ).toBe(dedent`
        fn();
        /* this is a comment */
      `);
    });
  });

  describe("line", () => {
    it("is a block comment when omitted", () => {
      const value = types.COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        comment: "this is a comment",
        where: "leading"
      }
      );

      expect(
        stringify`${value}`
      ).toBe(dedent`
        /* this is a comment */
        fn();
      `);
    });

    it("is a block comment when false", () => {
      const value = types.COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        line: false,
        comment: "this is a comment",
        where: "leading"
      }
      );

      expect(
        stringify`${value}`
      ).toBe(dedent`
        /* this is a comment */
        fn();
      `);
    });

    it("is a slash comment when true", () => {
      const value = types.COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        line: true,
        comment: "this is a comment",
        where: "trailing"
      });

      expect(
        stringify`${value}`
      ).toBe(dedent`
        fn(); // this is a comment
      `);
    });
  });
});

describe("MULTI_LINE_COMMENT", () => {
  describe("leading", () => {
    it("attaches a comment before the node", () => {
      const value = types.MULTI_LINE_COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        comments: ["one", "two"],
        where: "leading"
      });

      expect(
        stringify`${value}`
      ).toBe(dedent`
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
      const value = types.MULTI_LINE_COMMENT({
        node: types.AS_STATEMENT(
          types.CALL({ callee: "fn" })
        ),
        comments: ["one", "two"],
        where: "trailing"
      });

      expect(
        stringify`${value}`
      ).toBe(dedent`
        fn();
        /*
         * one
         * two
         */
      `);
    });
  });
});

