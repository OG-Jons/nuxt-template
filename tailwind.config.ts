import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default <Partial<Config>>{
  darkMode: "class",
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["circle-flags", "iconamoon"]),
    }),
  ],
};
