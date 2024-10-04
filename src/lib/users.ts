import { createHash } from "node:crypto";

import type { User } from "@auth/core/types";

export const generateUserId = (user: User) => {
    if(!user.email) throw new Error("Email is required");
    return createHash("sha256").update(user.email).digest("hex");
};