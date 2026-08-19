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
  renderDesserts();
  renderHours();
  renderSocial();
  setupNavToggle();
  setFooterYear();
  setupHeaderScrollState();
  setupScrollReveal();
  setupPizzaCardFlip();
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
      <h3 class="menu-category-title reveal">${escapeHtml(category.category)}</h3>
      <div class="menu-grid">
        ${category.items.map(renderMenuCard).join("")}
      </div>
    </div>
  `).join("");
}

// Foto que es mostra al revers de la targeta quan la pizza encara no
// té fotografia pròpia assignada (camp "image" a MENU, js/data.js).
const DEFAULT_PIZZA_IMAGE = "assets/img/hero-mobile.jpg";

function renderMenuCard(item, index) {
  const image = item.image || DEFAULT_PIZZA_IMAGE;
  return `
    <article class="pizza-card reveal" style="${staggerStyle(index)}" tabindex="0" role="button" aria-pressed="false" aria-label="Gira la targeta per veure una foto de ${escapeAttr(item.name)}">
      <div class="pizza-card-inner">
        <div class="pizza-card-face pizza-card-front">
          <span class="pizza-card-flip-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L8 5l4 4V6c1.66 0 3.14.67 4.22 1.78A5.98 5.98 0 0 1 18 12c0 3.31-2.69 6-6 6a5.98 5.98 0 0 1-4.22-1.78l-1.42 1.42A7.95 7.95 0 0 0 12 20c4.42 0 8-3.58 8-8 0-2.21-.9-4.21-2.35-5.65z"/></svg>
          </span>
          <div class="menu-card-head">
            <h4 class="menu-card-name">${escapeHtml(item.name)}</h4>
            <span class="menu-card-price">${escapeHtml(item.price)}</span>
          </div>
          <p class="menu-card-ingredients">${escapeHtml(item.ingredients)}</p>
        </div>
        <div class="pizza-card-face pizza-card-back">
          <img src="${escapeAttr(image)}" alt="" loading="lazy" />
          <div class="pizza-card-back-overlay">
            <span class="pizza-card-back-name">${escapeHtml(item.name)}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* ---------- Gir 3D de les targetes de pizza ---------- */
// El gir amb el ratolí ja el fa el CSS (:hover). Aquí només gestionem
// l'activació amb tocar (mòbil/tàctil) i amb teclat (accessibilitat).
function setupPizzaCardFlip() {
  const container = document.getElementById("menu-list");
  if (!container) return;

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".pizza-card");
    if (card) toggleCardFlip(card);
  });

  container.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".pizza-card");
    if (!card) return;
    event.preventDefault();
    toggleCardFlip(card);
  });
}

function toggleCardFlip(card) {
  const isFlipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(isFlipped));
}

/* ---------- Extres ---------- */
function renderExtras() {
  const container = document.getElementById("extras-list");
  if (!container) return;

  container.innerHTML = EXTRAS.map((group, index) => `
    <div class="extras-group reveal" style="${staggerStyle(index)}">
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
  container.innerHTML = PRODUCTS.map((product, index) => renderProductCard(product, index)).join("");
}

/* ---------- Postres artesanals ---------- */
function renderDesserts() {
  const container = document.getElementById("desserts-list");
  if (!container) return;

  container.innerHTML = DESSERTS.map((dessert, index) => renderProductCard(dessert, index)).join("");
}

/* Targeta compartida per a productes i postres.
   Si l'objecte inclou "image" (ruta a assets/img/...), es mostra la
   foto; si no, es mostra un monograma decoratiu com a marcador. */
function renderProductCard(item, index) {
  const media = item.image
    ? `<img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.name)}" loading="lazy" />`
    : `<span class="product-card-monogram" aria-hidden="true">${escapeHtml((item.name || "?").charAt(0))}</span>`;

  return `
    <article class="product-card reveal" style="${staggerStyle(index)}">
      <div class="product-card-media">${media}</div>
      <div class="product-card-body">
        <div class="product-card-head">
          <h3 class="product-card-name">${escapeHtml(item.name)}</h3>
          <span class="product-card-price">${escapeHtml(item.price)}</span>
        </div>
        <p class="product-card-description">${escapeHtml(item.description)}</p>
      </div>
    </article>
  `;
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

/* ---------- Capçalera: ombra en fer scroll ---------- */
function setupHeaderScrollState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const updateState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
}

/* ---------- Aparició d'elements en fer scroll ---------- */
function staggerStyle(index, stepMs = 60, maxSteps = 6) {
  const delay = (index % maxSteps) * stepMs;
  return `--reveal-delay: ${delay}ms`;
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
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
