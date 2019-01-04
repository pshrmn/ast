import tsc from "rollup-plugin-typescript2";

// don't bundle dependencies for es/cjs builds
const pkg = require("./package.json");
const deps = Object.keys(pkg.dependencies).map(key => key);

module.exports = [
  {
    input: "src/index.ts",
    external: deps,
    plugins: [
      tsc({
        useTsconfigDeclarationDir: true
      })
    ],
    output: {
      format: "cjs",
      file: "dist/ast.js",
      sourcemap: false
    }
  }
];
