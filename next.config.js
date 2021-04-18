const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval(
   {
      future: {
         webpack5: true,
      },
      rewrites: async () => {
         return [
            {
               source: "/:any*",
               destination: "/",
            },
         ];
      }
   }
);