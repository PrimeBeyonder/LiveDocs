import { Liveblocks } from "@liveblocks/node";

// Check if the environment variable is set
const liveblocksSecret =`sk_dev_QpHPlxXThruNM84MWAQOXKSTqLOIzrUCXnC9lTFxQm0E65Qf-udNJyXHfAoP2xWn`;

if (!liveblocksSecret) {
  console.error("LIVEBLOCKS_SECRET_KEY is not defined in the environment variables.");
}

console.log("Liveblocks secret key successfully retrieved.");

export const liveblocks = new Liveblocks({
  secret: liveblocksSecret as string,
});
