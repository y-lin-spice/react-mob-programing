import { makeVar } from "@apollo/client";

export const selectedTags = makeVar<Record<string, boolean>>({});
