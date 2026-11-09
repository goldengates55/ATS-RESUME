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
- Files: `vendor/qr.js` (QR codes), `index.html` (about 450 KB), `data/` (occupation data, loaded when a region is chosen and then kept on the device), `install.html`, `sw.js`, `manifest.webmanifest`, 3 icons, `vendor/` (pdf-lib, JSZip), `.nojekyll`.

## Suggestions (Scan tab, under Tailor to this posting)
Suggestions work offline and come only from your own resume text: hard and soft skills with the evidence for each, keyword gaps with an "I have this" form, figures for bullets, a wording coach, and title match at the same seniority. Anything added or renamed must be confirmed, and any [blank] must be filled, before a PDF, Word, text or pack download.

## More sections (Scan tab, More tailoring tools)
- **Ready to send?** final checklist and a suggested file name.
- **Interview answers (story bank):** saved Situation, Task, Action, Result answers with speaking-time estimate.
- **Offer comparison:** yearly pay, benefits, commuting and real hourly rate for up to three offers.
- **Messages and calendar:** follow-up, thank-you, accept, decline, salary and reference messages (English and French); save events and tracker follow-ups as `.ics` calendar files.
- **Receipts and invoices:** one-page PDFs from the Clients tool.
- **Backup reminder:** a banner appears when you have saved work and no recent backup.

## Filled-in estimates
"Find bullets to quantify" and "Figures for bullets" now fill bullets with complete phrases (a scale, a process, time saved, an improvement or a result) matched to the type of work, with High or Typical values. No [brackets] are inserted. They are estimates, not facts: each one is listed under "Confirm before download", and the download asks you to confirm or change it first.

## Job focus (only the NOC for the job posting)
When a job posting is present, the scan shows NOC suggestions, official duties, measurable-result ideas, title ideas, heading suggestions, title match and the TEER path only for the occupation matched to the posting (and the role that matches it). Other roles show a short note. Tick "Show suggestions for my other roles too" in the scan results to see everything. With no posting, nothing is hidden.

## Push to 100% (job focus)
In "Official expectations by role" and in the Tailor section, **Push to 100%** is offered only for the role that matches the job you are applying for (the NOC matched to the posting), or your latest role if none match or there is no posting. Other roles can still add single items, one by one.

## Sharing and accessibility
- **Share the app (QR code):** in More tailoring tools, make a QR code for your install page, save it as a PNG or print a flyer. `install.html` also shows a QR code when opened on a computer.
- **Accessibility:** skip link, labelled fields, visible keyboard focus, text size setting (gear menu), and an accessibility check in the self-check.

## Backup
In the Resume builder, **Full backup** saves accounts, saved resumes, tracker, certificates, score history and settings in one file (optional passphrase). Activation is never included, so a restored backup on a new phone still needs its own activation code.
