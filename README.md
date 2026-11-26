# CHED RO VI – Property System portal

Landing page for the **PPE & Semi-Expendable Property System** of CHED Regional Office VI.
It is plain HTML, CSS and JavaScript with no build step. GitHub Pages serves it from `main` / root.

The system itself runs on Google Apps Script. Its own sign-in (Google account, role, and a PIN for Accounting and COA users) decides who can use it. This page only links to it.

## Files

- `index.html`: page content
- `styles.css`: CHED blue and gold styles
- `script.js`: the app link (`APP_URL`), mobile menu and footer year
- `seal.png`: CHED seal

## Change the app link

After a **new deployment** (a new deployment ID), edit `APP_URL` at the top of `script.js`.
A "New version" of the same deployment keeps the same link, so it needs no change.
