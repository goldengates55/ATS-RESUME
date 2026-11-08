# Real-phone test checklist (about 15 minutes)

Do this on the phone your users have, once on Android (Chrome) and once on iPhone (Safari) if you can.

1. **Install:** open `install.html` from your site. Follow the steps and open the app from its home-screen icon. The top bar should show the version.
2. **Activate:** send the device code, enter the activation code. Close and reopen: it should stay activated.
3. **Offline:** turn on airplane mode. Open the app. Choose each region you use (Canada, US, UK...). Each should say "built in".
4. **Scan:** paste a resume and a real posting, press Analyze. Check the match, the keyword highlights and the "Imported automatically" notice.
5. **Builder:** open the builder. Check tenses (old roles past, current role present). Use "Add any phrase from the posting" with one real phrase.
6. **Export offline:** download PDF and Word. Open both. Check no words are missing and the text is selectable.
7. **Help and self-check:** in "More tailoring tools" run the self-check. Everything should say OK except "Installed as an app" when used in a browser tab.
8. **Backup:** make a full backup, clear the app's data, restore it. Accounts and saved resumes should return (activation does not).
9. **Update:** change the version in `sw.js`, upload, reopen the app online. The badge should turn yellow ("Update v1.x"). Tap it.
10. **French:** switch the interface to Français and check the tools and tabs for English leftovers.

Send me anything that failed, with the phone model and browser.

Extra checks for version 1.15:
11. **Formats and sections:** in the builder, fill "More sections", switch between Standard, French CV and Europass-style, and download a PDF. Check the section names, order and date style.
12. **Fit to one page:** use "Fit to a page limit" with a long resume. Check the text is still easy to read.
13. **Scam check:** paste a posting that asks for a fee and see the red warning after the scan.
14. **Best version:** save two versions of a resume, paste a posting and press "Compare my versions".
15. **Clients:** add a client price and a payment and check the balance, then export the CSV.

Extra checks for version 1.16:
16. **QR code:** open `install.html` on a computer and scan the code with a phone. In the app, make a QR code and print the flyer.
17. **ATS parser view:** run it on a real resume. Check the name, email, phone and each job are found, and fix anything marked "Fix".
18. **Accessibility:** set Text size to Extra large and check nothing is cut off. If you use a screen reader (TalkBack or VoiceOver), move through the tabs and one tool.

Extra checks for version 1.17:
19. **Suggestions:** on the Scan tab under Tailor to this posting, try Suggest hard skills, Find my keyword gaps (tap I have this and add one), Suggest figures, Check my wording and Suggest title match.
20. **Download gate:** after adding or renaming something, try to download. It should ask you to confirm first, and should refuse while a [blank] remains.

Extra checks for version 1.18:
21. **Backup reminder:** save a resume version, wait two days (or ask me for a test build) and check the banner appears, then make a backup and check it goes away.
22. **Ready to send?:** run it on a real resume and fix each item marked Fix.
23. **Calendar:** save an event as .ics and open it on the phone. Check it lands in the calendar at the right time.
24. **Receipt and invoice:** make both from a client with a payment. Check the amounts and open the PDF on the phone.
25. **Offer comparison:** enter two offers you know the numbers for and check the totals by hand.
