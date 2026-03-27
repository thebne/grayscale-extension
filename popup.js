const globalToggle = document.getElementById("globalToggle");
const currentSiteSection = document.getElementById("currentSiteSection");
const toggleCurrentBtn = document.getElementById("toggleCurrentBtn");
const settingsBtn = document.getElementById("settingsBtn");
const siteCount = document.getElementById("siteCount");

let currentHost = null;

function updateUI(sites, enabled) {
  globalToggle.checked = enabled;

  // Site count with link to settings
  const n = sites.length;
  siteCount.innerHTML = `${n} site${n !== 1 ? "s" : ""} managed &middot; <a id="openSettings">Settings</a>`;
  document.getElementById("openSettings").addEventListener("click", openSettings);

  // Current site button
  if (!currentHost) {
    currentSiteSection.style.display = "none";
    return;
  }
  currentSiteSection.style.display = "block";
  const isActive = sites.some(
    (s) => currentHost === s || currentHost.endsWith("." + s)
  );
  if (isActive) {
    toggleCurrentBtn.textContent = `Disable grayscale on ${currentHost}`;
    toggleCurrentBtn.classList.add("active");
  } else {
    toggleCurrentBtn.textContent = `Enable grayscale on ${currentHost}`;
    toggleCurrentBtn.classList.remove("active");
  }
}

function load() {
  chrome.storage.sync.get({ sites: [], enabled: true }, (data) => {
    updateUI(data.sites, data.enabled);
  });
}

function openSettings() {
  chrome.runtime.openOptionsPage();
}

settingsBtn.addEventListener("click", openSettings);

globalToggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: globalToggle.checked });
});

toggleCurrentBtn.addEventListener("click", () => {
  chrome.storage.sync.get({ sites: [] }, (data) => {
    const isActive = data.sites.some(
      (s) => currentHost === s || currentHost.endsWith("." + s)
    );
    if (isActive) {
      const matching = data.sites.find(
        (s) => currentHost === s || currentHost.endsWith("." + s)
      );
      const sites = data.sites.filter((s) => s !== matching);
      chrome.storage.sync.set({ sites }, () => load());
    } else {
      const domain = currentHost;
      if (!domain) return;
      const sites = [...data.sites, domain].sort();
      chrome.storage.sync.set({ sites }, () => load());
    }
  });
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0]?.url) {
    try {
      const url = new URL(tabs[0].url);
      currentHost = url.hostname.replace(/^www\./, "");
    } catch {}
  }
  load();
});
