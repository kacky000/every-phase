// The Moon, answering everyone who makes it late-night promises.
import { mkdirSync, writeFileSync } from "node:fs";

const comeback =
  "You've promised me \"starting Monday\" for two hundred thousand years. I've been through every phase since, and you haven't started one.";

const k = [...comeback].length;
if (k < 1 || k > 240) throw new Error(`line is ${k} characters`);

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, comeback, "utf8");
