# Grayscale Sites — Store Listing Copy

Paste these directly into the Chrome Web Store / Edge Add-ons forms.

---

## Name
Grayscale Sites

## Short summary (132 chars max — Chrome "Summary" field)
Make specific websites black & white to reduce their visual appeal and help you spend less time on them.

## Category
Productivity
(Secondary: Accessibility)

## Language
English (United States)

---

## Detailed description

Grayscale Sites is a tiny, no-nonsense extension that desaturates any website you put on its list. Colorful apps — social feeds, messengers, shopping sites — are designed to grab attention. Removing color removes a lot of that pull without fully blocking the site, so you can still use it when you need to, just with less of a dopamine hit.

**Features**
• One-click toggle for the current site from the popup
• Manage your full site list from the Settings page
• Global on/off switch to pause everything without losing your list
• Settings sync across your signed-in browsers (via chrome.storage.sync)
• Zero network requests — nothing leaves your machine
• Zero tracking, zero analytics, zero ads

**How it works**
The extension injects a single CSS rule — `filter: grayscale(100%)` — on pages whose hostname matches your list. That's it. No scripts run on other pages, no data is collected, no servers are contacted.

**Default starter list**
On first install, Telegram Web and X (Twitter) are added to get you started. Remove them anytime from Settings.

**Open source**
Source code: https://github.com/thebne/grayscale-extension

---

## Permission justifications (Chrome requires one per permission)

**storage** — Used to save your list of grayscaled sites and the global on/off state, synced via chrome.storage.sync so your list follows you across devices.

**activeTab** — Used so the popup can read the hostname of the current tab and offer a one-click "Enable grayscale on this site" button. Only accessed when you click the extension icon.

**host_permissions: <all_urls>** — Required because the user chooses which sites to grayscale, so the content script must be allowed to run on any site the user adds to their list. The script only injects a CSS filter rule and reads/writes no page data.

## Single purpose statement (Chrome requires this)
Apply a grayscale CSS filter to user-selected websites.

## Data usage disclosures (Chrome form — check these boxes)
- [ ] Personally identifiable information
- [ ] Health information
- [ ] Financial & payment information
- [ ] Authentication information
- [ ] Personal communications
- [ ] Location
- [ ] Web history
- [ ] User activity
- [ ] Website content

Leave ALL boxes unchecked. The extension collects no data.

Certify:
- [x] I do not sell or transfer user data to third parties
- [x] I do not use or transfer user data for purposes unrelated to my item's single purpose
- [x] I do not use or transfer user data to determine creditworthiness or for lending purposes

---

## Edge-specific notes

Edge's submission form is simpler:
- Upload the same zip
- Use the same description, short description, category
- Edge also asks for a "Properties" page — same permission justifications apply
- No registration fee

---

## Screenshots you need (1280×800 or 640×400, at least 1, up to 5)

Suggested shots — take these on your machine:
1. **Popup over a grayscaled Telegram Web** — shows the extension in action, toggle on
2. **Popup over a normal colorful site** — shows the "Enable grayscale on this site" button
3. **Settings page** — shows the site list management UI
4. **Before/after side-by-side** of X (Twitter) — dramatic color → grayscale

Use Windows Snipping Tool (Win+Shift+S) and resize to 1280×800 in any editor.

---

## Promo tile (optional, 440×280)
Skip unless you want featured placement. Not required for submission.
