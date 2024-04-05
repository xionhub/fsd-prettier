/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^[@/]",

    "^~/app/(.*)$",
    "^~/page/(.*)$",
    "^~/widget/(.*)$",
    "^~/feature/(.*)$",
    "^~/entities/(.*)$",
    "^~/shared/(.*)$",
    "^~/(.*)$",

    "^[./]",
    "^[../]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
