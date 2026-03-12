/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dcecff",
          200: "#b9d9ff",
          300: "#87beff",
          400: "#5198ff",
          500: "#2b72f8",
          600: "#1f58dc",
          700: "#1e47b2",
          800: "#203f8c",
          900: "#22386f"
        },
        accent: "#12b981",
        ink: "#0f172a",
        mist: "#eef4ff"
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        display: ["Sora", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(43,114,248,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(18,185,129,0.16), transparent 24%)"
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};
