const STYLE_ID = "grayscale-ext-style";

function getHostPattern(hostname) {
  return hostname.replace(/^www\./, "");
}

function applyGrayscale() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = "html { filter: grayscale(100%) !important; }";
  (document.head || document.documentElement).appendChild(style);
}

function removeGrayscale() {
  const style = document.getElementById(STYLE_ID);
  if (style) style.remove();
}

function checkAndApply() {
  const host = getHostPattern(location.hostname);
  chrome.storage.sync.get({ sites: [], enabled: true }, (data) => {
    if (!data.enabled) {
      removeGrayscale();
      return;
    }
    const match = data.sites.some(
      (s) => host === s || host.endsWith("." + s)
    );
    if (match) {
      applyGrayscale();
    } else {
      removeGrayscale();
    }
  });
}

checkAndApply();

chrome.storage.onChanged.addListener(() => {
  checkAndApply();
});
