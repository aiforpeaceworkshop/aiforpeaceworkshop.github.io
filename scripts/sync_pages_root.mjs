import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

const directories = ["assets", "img", "iclr-2026", "first-edition"];
const files = ["index.html", "404.html", "favicon.svg"];

for (const directory of directories) {
  const target = resolve(root, directory);
  await rm(target, { recursive: true, force: true });
  await cp(resolve(dist, directory), target, { recursive: true });
}

for (const file of files) {
  await cp(resolve(dist, file), resolve(root, file));
}

console.log("Synced the production build to the legacy GitHub Pages root.");
