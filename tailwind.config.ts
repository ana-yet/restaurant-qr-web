import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Bangladeshi restaurant color palette
        bengali: {
          50: "#f0fdf4", // Lightest green
          100: "#dcfce7", // Very light green
          200: "#bbf7d0", // Light green
          300: "#86efac", // Medium light green
          400: "#4ade80", // Medium green
          500: "#22c55e", // Main green
          600: "#16a34a", // Dark green
          700: "#15803d", // Darker green
          800: "#166534", // Very dark green
          900: "#14532d", // Darkest green
        },
        golden: {
          50: "#fffbeb", // Lightest yellow
          100: "#fef3c7", // Very light yellow
          200: "#fde68a", // Light yellow
          300: "#fcd34d", // Medium light yellow
          400: "#fbbf24", // Medium yellow
          500: "#f59e0b", // Main yellow/gold
          600: "#d97706", // Dark yellow
          700: "#b45309", // Darker yellow
          800: "#92400e", // Very dark yellow
          900: "#78350f", // Darkest yellow
        },
        spice: {
          50: "#fef2f2", // Lightest red
          100: "#fee2e2", // Very light red
          200: "#fecaca", // Light red
          300: "#fca5a5", // Medium light red
          400: "#f87171", // Medium red
          500: "#ef4444", // Main red
          600: "#dc2626", // Dark red
          700: "#b91c1c", // Darker red
          800: "#991b1b", // Very dark red
          900: "#7f1d1d", // Darkest red
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
