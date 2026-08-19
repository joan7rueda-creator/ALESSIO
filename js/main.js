/**
 * main.js — Lògica de renderitzat i interacció.
 * No cal editar aquest fitxer per fer canvis de contingut:
 * els textos, preus i dades del negoci es gestionen a js/data.js
 */

document.addEventListener("DOMContentLoaded", () => {
  applyBusinessInfo();
  renderMenu();
  renderExtras();
  renderProducts();
  renderHours();
  renderSocial();
  setupNavToggle();
  setFooterYear();
});

/* ---------- Telèfon, WhatsApp, adreça i mapa ---------- */
function applyBusinessInfo() {
  const telHref = `tel:${CONFIG.phoneLink}`;
  const waHref = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  document.querySelectorAll('a[href="tel:+34930000000"]').forEach((el) => {
    el.setAttribute("href", telHref);
  });

  ["header-whatsapp", "hero-whatsapp", "contact-whatsapp", "floating-whatsapp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", waHref);
  });

  const contactCallText = document.getElementById("contact-call-text");
  if (contactCallText) contactCallText.textContent = `Trucar (${CONFIG.phoneDisplay})`;

  const addressText = document.getElementById("address-text");
  if (addressText) addressText.textContent = CONFIG.address;

  const footerAddress = document.getElementById("footer-address");
  if (footerAddress) footerAddress.textContent = CONFIG.address;

  const footerPhoneLink = document.querySelector("#footer-phone a");
  if (footerPhoneLink) {
    footerPhoneLink.setAttribute("href", telHref);
    footerPhoneLink.textContent = CONFIG.phoneDisplay;
  }

  const mapsLink = document.getElementById("maps-link");
  if (mapsLink) mapsLink.setAttribute("href", CONFIG.mapsLinkUrl);

  const mapsEmbed = document.getElementById("maps-embed");
  if (mapsEmbed) mapsEmbed.setAttribute("src", CONFIG.mapsEmbedSrc);

  const footerNote = document.getElementById("footer-quality-note");
  if (footerNote) footerNote.textContent = CONFIG.footerNote;
}

/* ---------- Carta de pizzes ---------- */
function renderMenu() {
  const container = document.getElementById("menu-list");
  if (!container) return;

  container.innerHTML = MENU.map((category) => `
    <div class="menu-category">
      <h3 class="menu-category-title">${escapeHtml(category.category)}</h3>
      <div class="menu-grid">
        ${category.items.map(renderMenuCard).join("")}
      </div>
    </div>
  `).join("");
}

function renderMenuCard(item) {
  return `
    <article class="menu-card">
      <div class="menu-card-head">
        <h4 class="menu-card-name">${escapeHtml(item.name)}</h4>
        <span class="menu-card-price">${escapeHtml(item.price)}</span>
      </div>
      <p class="menu-card-ingredients">${escapeHtml(item.ingredients)}</p>
    </article>
  `;
}

/* ---------- Extres ---------- */
function renderExtras() {
  const container = document.getElementById("extras-list");
  if (!container) return;

  container.innerHTML = EXTRAS.map((group) => `
    <div class="extras-group">
      <h4 class="extras-group-title">${escapeHtml(group.group)}</h4>
      <div class="extras-items">
        ${group.items.map((item) => `
          <span class="extra-chip">${escapeHtml(item.name)}<strong>${escapeHtml(item.price)}</strong></span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------- Productes italians ---------- */
function renderProducts() {
  const container = document.getElementById("products-list");
  const emptyMsg = document.getElementById("products-empty");
  if (!container) return;

  if (!PRODUCTS || PRODUCTS.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.hidden = false;
    return;
  }

  if (emptyMsg) emptyMsg.hidden = true;
  container.innerHTML = PRODUCTS.map((product) => `
    <article class="product-card">
      <div class="product-card-head">
        <h3 class="product-card-name">${escapeHtml(product.name)}</h3>
        <span class="product-card-price">${escapeHtml(product.price)}</span>
      </div>
      <p class="product-card-description">${escapeHtml(product.description)}</p>
    </article>
  `).join("");
}

/* ---------- Horaris ---------- */
function renderHours() {
  const html = CONFIG.hours.map((h) => {
    const isClosed = !h.open || !h.close;
    return `
      <li class="${isClosed ? "closed" : ""}">
        <span>${escapeHtml(h.day)}</span>
        <span>${isClosed ? "Tancat" : `${escapeHtml(h.open)} – ${escapeHtml(h.close)}`}</span>
      </li>
    `;
  }).join("");

  const list = document.getElementById("hours-list");
  if (list) list.innerHTML = html;

  const footerList = document.getElementById("footer-hours-list");
  if (footerList) footerList.innerHTML = html;
}

/* ---------- Xarxes socials ---------- */
function renderSocial() {
  const container = document.getElementById("footer-social");
  if (!container) return;

  const links = [];
  if (CONFIG.social.instagram) {
    links.push(`<a href="${escapeAttr(CONFIG.social.instagram)}" target="_blank" rel="noopener">Instagram</a>`);
  }
  if (CONFIG.social.facebook) {
    links.push(`<a href="${escapeAttr(CONFIG.social.facebook)}" target="_blank" rel="noopener">Facebook</a>`);
  }
  container.innerHTML = links.join("");
}

/* ---------- Navegació mòbil ---------- */
function setupNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Any actual al footer ---------- */
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Utilitats ---------- */
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(str) {
  return escapeHtml(str);
}
