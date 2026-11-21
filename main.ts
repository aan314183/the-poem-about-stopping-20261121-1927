import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The cursor blinks. My hand hovers —
and does not press send.
The message stays unsent, the door unopened,
and the evening stays mine.

To stop is not to fail.
It is the one proof no one can take from me:
the hand that could have moved,
and chose stillness instead.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote ${[...poem].length} characters to /output/entry.txt`);
