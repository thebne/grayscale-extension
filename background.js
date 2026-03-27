const DEFAULT_SITES = ["t.me", "web.telegram.org", "x.com"];

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.storage.sync.set({ sites: DEFAULT_SITES, enabled: true });
  }
});
