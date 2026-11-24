// Alien Field Notes — a two-day Earth review, distilled to one line.
// Node 22, standard library only. Deterministic: no timestamps, no
// randomness, no environment-dependent output — same input, same file.

const fs = require("node:fs");
const path = require("node:path");

const LINE =
  "Earth gets four stars: the sunsets are unreal, the snacks are elite, but the dominant species pays rent to live on its own planet.";

// --- Gate: the entry must be 1–200 chars, non-blank, exactly one sentence ---
function fail(msg) {
  throw new Error(`gate failed: ${msg}`);
}

if (LINE.length < 1 || LINE.length > 200) {
  fail(`length ${LINE.length} is outside 1–200`);
}
if (LINE.trim().length === 0) {
  fail("entry is only whitespace");
}
if (LINE !== LINE.trim()) {
  fail("entry has leading or trailing whitespace");
}
const terminators = (LINE.match(/[.!?]/g) || []).length;
if (terminators !== 1 || !/[.!?]$/.test(LINE)) {
  fail("entry must be exactly one sentence ending with . ! or ?");
}

// --- Emit ---
// Determinism note: output depends only on the constant LINE above —
// no clock, no random source, no env input besides the output directory,
// so repeated runs produce byte-identical entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
