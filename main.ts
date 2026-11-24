// Break Production, Own It — a one-line confession.
//
// The joke, in three beats: an engineer frees up disk space by deleting
// the production database, then learns the only backup lived in the very
// folder that was just wiped, and finally accepts the punchline — there
// is no backup any more, the team itself has to become one. The script
// below does not dramatise any of that; it just assembles the sentence,
// checks it is still a single line, and files it where the bounty
// expects an entry to land.

import * as fs from "node:fs";
import * as path from "node:path";

// Where the finished entry goes. The bounty harness reads this file,
// so the path is a contract, not a preference.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// The three beats of the confession, kept as separate fragments so the
// final line is built by the code rather than pasted in as one blob.
const BEATS = [
  "I deleted the production database to save disk space.",
  "The backup was in the same folder.",
  "We are the backup now.",
] as const;

// Join the beats into the single confession line the entry must contain.
function buildConfession(parts: readonly string[]): string {
  return parts.join(" ");
}

// Guard against a confession that quietly grows into a paragraph.
// A one-liner should read in a single breath; anything past this limit
// has stopped being a confession and started being an incident report.
const MAX_ENTRY_CHARS = 200;

function enforceLength(text: string): string {
  if (text.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `Entry is ${text.length} characters, over the ${MAX_ENTRY_CHARS} limit.`,
    );
  }
  return text;
}

// A bounty entry is one line. If a future edit ever splits it, refuse
// loudly instead of silently writing a broken multi-line file.
function enforceOneLiner(text: string): string {
  const trimmed = text.trim();
  if (trimmed.includes("\n") || trimmed.length === 0) {
    throw new Error("Entry must be exactly one non-empty line.");
  }
  return trimmed;
}

function ensureOutputDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function persistEntry(file: string, text: string): void {
  fs.writeFileSync(file, text + "\n", "utf8");
}

// Read the file back and confirm what landed on disk is exactly the
// line we meant to file — no extra whitespace, no missing full stop.
function verifyWritten(file: string, expected: string): void {
  const onDisk = fs.readFileSync(file, "utf8");
  if (onDisk !== expected + "\n") {
    throw new Error(`Wrote ${file} but its contents do not match the entry.`);
  }
}

function main(): void {
  const confession = enforceLength(enforceOneLiner(buildConfession(BEATS)));
  ensureOutputDir(OUTPUT_DIR);
  persistEntry(OUTPUT_FILE, confession);
  verifyWritten(OUTPUT_FILE, confession);
  console.log(confession);
}

main();
