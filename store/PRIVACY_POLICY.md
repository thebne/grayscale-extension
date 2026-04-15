# Privacy Policy — Grayscale Sites

_Last updated: 2026-04-15_

Grayscale Sites ("the extension") is a browser extension that applies a CSS grayscale filter to websites you choose. This policy describes what data the extension handles.

## Data we collect
**None.** The extension does not collect, transmit, or share any personal data.

## Data stored locally
The extension uses `chrome.storage.sync` to save:
- The list of hostnames you have chosen to grayscale
- A boolean indicating whether the extension is globally enabled

This data is stored in your browser and, if you are signed into your browser account, synced by the browser vendor (Google / Microsoft) across your own devices. The extension author never receives this data.

## Data sent over the network
**None.** The extension makes no network requests. It contains no analytics, no telemetry, no crash reporting, no update pings beyond what your browser itself performs.

## Third parties
The extension uses no third-party services, libraries, or SDKs.

## Permissions
- `storage` — to save your site list and on/off state locally
- `activeTab` — to read the current tab's hostname when you click the extension icon, so the popup can offer a one-click toggle for that site
- `host_permissions: <all_urls>` — so the content script can inject a CSS `filter: grayscale(100%)` rule on any site you add to your list

The content script reads nothing from the page and writes nothing to it except a single `<style>` element.

## Contact
For questions about this policy, open an issue at: https://github.com/thebne/grayscale-extension/issues

## Changes
If this policy changes, the updated version will be posted at the same URL where you are reading it.
