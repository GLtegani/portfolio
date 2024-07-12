import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
        bg: "text 15s ease infinite",
        textReverse: "text 5s ease infinite reverse",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    backgroundImage: {
      "custom-gradient":
        // "linear-gradient(110.1deg, rgba(30, 2, 83, 1) 44.2%, rgba(198, 55, 160, 1) 138.2%)",
        "linear-gradient( 0deg,  rgba(230,230,255) 30%, rgba(130,216,229,1) 85% )",
      "custom-gradient-dark":
        "linear-gradient( 200deg,  rgba(33,72,89,1) -1.5%, rgba(130,216,229,1) 85% )",
      "custom-bg-avatar":
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(180,250,255) 0%, rgba(200,250,255) 19.7%, rgba(25,150,221) 100.2% )",
      "custom-bg-avatar-2":
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,43,115,1) 0%, rgba(210, 210, 210) 90% );",
      "custom-bg-avatar-dark":
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(2,37,78,1) 0%, rgba(4,56,126,1) 19.7%, rgba(85,245,221,1) 100.2% )",
      "custom-bg-avatar-2-dark":
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% );",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
