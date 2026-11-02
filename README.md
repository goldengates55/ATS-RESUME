# ATS Resume Optimiser

Installable web app (PWA). Scan a resume against official job classifications and a job posting, tailor it, and download it as PDF, DOCX or TXT. Everything runs in the browser; nothing is uploaded.

## Publish on GitHub Pages
1. Create a new repository and upload **all files and the `vendor` and `data` folders** from this zip to the root. If PDF or DOCX download fails, the `vendor` folder (with `pdf-lib.min.js` and `jszip.min.js`) was probably not uploaded; if occupation matching says it could not load data, the `data` folder is missing. Add the folder, keeping its name. Include the hidden `.nojekyll` file too.
2. Go to **Settings, Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
3. Share `https://YOUR-NAME.github.io/REPO/install.html` with your users. It has an **Install the app** button and English and French steps for iPhone (Safari) and Android (Chrome). The app itself also shows an **Install on your phone** button.
4. To change the WhatsApp number for activation codes, edit `WA` in the script of `install.html` and the number in its footer.

After that first visit the app opens with no internet. PDF and DOCX export work offline because the libraries are bundled.

## Release an update
Replace `index.html`, then change `VERSION` in `sw.js` (for example `atsresume-14`) and the version label in `index.html` and `install.html` (search for `v1.13` and `Version 1.13`, for example change to 1.14). Devices will show "A new version is ready" with an Update button.

## Notes
- Fonts load from Google Fonts on the first online visit and are then kept; until then the app uses system fonts.
- The optional local AI rewriting downloads its own ~1 GB model on first use and needs a connection then.
- Files: `index.html` (about 450 KB), `data/` (occupation data, loaded when a region is chosen and then kept on the device), `install.html`, `sw.js`, `manifest.webmanifest`, 3 icons, `vendor/` (pdf-lib, JSZip), `.nojekyll`.

## Backup
In the Resume builder, **Full backup** saves accounts, saved resumes, tracker, certificates, score history and settings in one file (optional passphrase). Activation is never included, so a restored backup on a new phone still needs its own activation code.
