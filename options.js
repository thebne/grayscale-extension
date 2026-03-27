const siteInput = document.getElementById("siteInput");
const addBtn = document.getElementById("addBtn");
const siteList = document.getElementById("siteList");
const emptyMsg = document.getElementById("emptyMsg");
const globalToggle = document.getElementById("globalToggle");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function normalizeDomain(input) {
  let d = input.trim().toLowerCase();
  d = d.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
  return d;
}

function render(sites) {
  siteList.innerHTML = "";
  emptyMsg.style.display = sites.length ? "none" : "block";
  sites.forEach((site) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "domain";
    span.textContent = site;
    li.appendChild(span);
    const btn = document.createElement("button");
    btn.className = "remove-btn";
    btn.textContent = "Remove";
    btn.addEventListener("click", () => removeSite(site));
    li.appendChild(btn);
    siteList.appendChild(li);
  });
}

function loadSites() {
  chrome.storage.sync.get({ sites: [], enabled: true }, (data) => {
    globalToggle.checked = data.enabled;
    render(data.sites);
  });
}

function addSite(domain) {
  if (!domain) return;
  chrome.storage.sync.get({ sites: [] }, (data) => {
    if (data.sites.includes(domain)) {
      showToast(`${domain} is already in the list`);
      return;
    }
    const sites = [...data.sites, domain].sort();
    chrome.storage.sync.set({ sites }, () => {
      render(sites);
      showToast(`Added ${domain}`);
    });
  });
}

function removeSite(domain) {
  chrome.storage.sync.get({ sites: [] }, (data) => {
    const sites = data.sites.filter((s) => s !== domain);
    chrome.storage.sync.set({ sites }, () => {
      render(sites);
      showToast(`Removed ${domain}`);
    });
  });
}

addBtn.addEventListener("click", () => {
  const domain = normalizeDomain(siteInput.value);
  if (domain) {
    addSite(domain);
    siteInput.value = "";
  }
});

siteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const domain = normalizeDomain(siteInput.value);
    if (domain) {
      addSite(domain);
      siteInput.value = "";
    }
  }
});

globalToggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: globalToggle.checked });
});

loadSites();
