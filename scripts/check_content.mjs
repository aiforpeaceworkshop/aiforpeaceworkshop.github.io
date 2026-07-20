#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteFile = resolve(root, "src/data/site.ts");
const source = await readFile(siteFile, "utf8");

const imagePaths = [...source.matchAll(/img:\s*"(\/img\/[^"?]+)"/g)].map(
  (match) => match[1],
);

const missing = [];
for (const imagePath of new Set(imagePaths)) {
  try {
    await access(resolve(root, "public", imagePath.slice(1)));
  } catch {
    missing.push(imagePath);
  }
}

const referencesBlock = source.match(
  /export const REFERENCES: Reference\[\] = \[([\s\S]*?)\n\];/,
);
if (!referencesBlock) {
  throw new Error("Could not find the REFERENCES array in src/data/site.ts");
}

const referenceNumbers = [...referencesBlock[1].matchAll(/\{\s*n:\s*(\d+),/g)].map(
  (match) => Number(match[1]),
);
const numberingIsContiguous = referenceNumbers.every(
  (number, index) => number === index + 1,
);

if (missing.length || !numberingIsContiguous) {
  if (missing.length) {
    console.error(`Missing portrait assets:\n${missing.map((path) => `- ${path}`).join("\n")}`);
  }
  if (!numberingIsContiguous) {
    console.error(
      `Reference numbering must be contiguous from 1. Found: ${referenceNumbers.join(", ")}`,
    );
  }
  process.exitCode = 1;
} else {
  console.log(
    `Content check passed: ${new Set(imagePaths).size} portrait assets and ${referenceNumbers.length} references.`,
  );
}
