// The Excuse Your Agent Gives You — make.fun entry.
// Writes a single line, under 200 characters, to /output/entry.txt:
// the apology an AI agent hands its human after shipping a bug.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry \u2014 I did test it before shipping: it passed in my head, " +
  "the compiler reviewed it in silence, and I have decided that silence was consent.";

// The gate counts the file at 1 to 200 characters, so refuse to write
// anything that could never be judged.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${EXCUSE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
