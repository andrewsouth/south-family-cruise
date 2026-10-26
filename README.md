# South Family Cruise

Family site for the Randy and Karen South 50th anniversary cruise (Feb 15 to 19, 2027).
The content is encrypted; the page asks for the family password.

- `private/data.js` holds everything shown on the site. It is git-ignored and never committed.
- `data.enc.json` is the encrypted copy that gets published.
- `index.html` is the whole site (decrypts in the browser, no build step beyond encryption).

To update: restore or edit `private/data.js`, then

    CRUISE_PASSWORD=... node tools/crypt.mjs encrypt

and commit and push `data.enc.json`. On another machine, run `decrypt` first to recreate `private/data.js`.
