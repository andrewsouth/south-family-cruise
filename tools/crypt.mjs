// Encrypts private/data.js into data.enc.json (safe to commit), or restores it.
//   CRUISE_PASSWORD=... node tools/crypt.mjs encrypt
//   CRUISE_PASSWORD=... node tools/crypt.mjs decrypt
// Uses PBKDF2-SHA256 + AES-256-GCM, matching the WebCrypto code in index.html.

import { readFileSync, writeFileSync } from "node:fs";
import { webcrypto as crypto } from "node:crypto";
import vm from "node:vm";

const ITER = 600000;
const SRC = new URL("../private/data.js", import.meta.url);
const OUT = new URL("../data.enc.json", import.meta.url);

const mode = process.argv[2];
const password = process.env.CRUISE_PASSWORD;
if (!password || !["encrypt", "decrypt"].includes(mode)) {
  console.error("Usage: CRUISE_PASSWORD=... node tools/crypt.mjs encrypt|decrypt");
  process.exit(1);
}

const b64 = buf => Buffer.from(buf).toString("base64");
const unb64 = s => new Uint8Array(Buffer.from(s, "base64"));

async function key(salt) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}

if (mode === "encrypt") {
  const src = readFileSync(SRC, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(src, sandbox);
  const plain = JSON.stringify({ source: src, data: sandbox.window.CRUISE });
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await key(salt), new TextEncoder().encode(plain));
  writeFileSync(OUT, JSON.stringify({ v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), ct: b64(ct) }) + "\n");
  console.log(`Encrypted ${plain.length} characters into data.enc.json`);
} else {
  const e = JSON.parse(readFileSync(OUT, "utf8"));
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(e.iv) }, await key(unb64(e.salt)), unb64(e.ct));
  writeFileSync(SRC, JSON.parse(new TextDecoder().decode(pt)).source);
  console.log("Restored private/data.js");
}
