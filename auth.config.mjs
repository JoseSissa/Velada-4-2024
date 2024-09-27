import Twitch from "@auth/core/providers/twitch";
import GitHub from "@auth/core/providers/github";

import { defineConfig } from "auth-astro";

export default defineConfig({
    providers: [
        Twitch({
            clientId: import.meta.env.TWITCH_CLIENT_ID,
            clientSecret: import.meta.env.TWITCH_CLIENT_SECRET,
        }),
        GitHub({
            clientId: import.meta.env.GITHUB_CLIENT_ID_DEV,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET_DEV,
        }),
    ],
});
