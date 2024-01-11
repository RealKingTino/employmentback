/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cdcfib-career-new-account-1583x759-dark-nero": "#fff",
        "cdcfib-career-new-account-1583x759-dark-old-brick": "#991b1b",
        "cdcfib-career-new-account-1583x759-dark-oxford-blue": "#374151",
        "cdcfib-career-new-account-1583x759-dark-froly": "#f87171",
        "cdcfib-career-new-account-1583x759-dark-alizarin-crimson": "#da251c",
        "cdcfib-career-new-account-1583x759-dark-burnt-sienna": "#e97451",
        "cdcfib-career-new-account-1583x759-dark-pale-sky": "#6b7280",
        "cdcfib-career-new-account-1583x759-dark-flamingo": "#ef4444",
        "cdcfib-career-new-account-1583x759-dark-athens-gray": "#e5e7eb",
        "cdcfib-career-new-account-1583x759-dark-diesel": "#0800ff",
        "cdcfib-career-new-account-1583x759-dark-salem": "#16a34a",
        "cdcfib-career-new-account-1583x759-dark-thunderbird": "#b91c1c",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
      },
    },
    fontSize: {
      "12xl": "31px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
