import animations from "@jose-sissa-3s/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                atomic: ["Atomic", "cursive"],
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                twitch: "var(--color-twitch)",
                ice: "var(--color-twitch-ice)",
            },
        },
    },
    plugins: [animations],
};
