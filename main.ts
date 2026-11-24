import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun bounty "Break Production, Own It":
// a one-line confession from the engineer who became the backup plan.
const entry =
  "I deleted the production database to save disk space. The backup was in the same folder. We are the backup now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
