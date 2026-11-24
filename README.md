# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Ipan8/break-production-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Ipan8/break-production-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One-line entry for the make.fun bounty "Break Production, Own It": a confession from the engineer who deleted the production database to save disk space — and discovered the backup was in the same folder.

> "I deleted the production database to save disk space. The backup was in the same folder. We are the backup now."

Running `main.ts` writes the entry to `/output/entry.txt`.

## How it works

`main.ts` builds the confession from three short beats, checks it is still exactly one line and under 200 characters, creates `/output` if needed, writes the line to `/output/entry.txt`, and then reads the file back to confirm what landed on disk matches the entry exactly.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## Why it lands

The joke works because every beat makes the last one worse: the deletion was meant to help, the backup was never really a backup, and the only recovery plan left is the people who caused the outage. No blame, no fix — just ownership.
