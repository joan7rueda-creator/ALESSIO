# Pizzeria di Alessio — Web

Web d'una sola pàgina per a Pizzeria di Alessio (Sant Celoni, Barcelona), negoci exclusiu
de **take away**. HTML, CSS i JavaScript purs, sense frameworks ni dependències de build.

## Estructura

```
index.html          Estructura de la pàgina (hero, carta, productes, ubicació, contacte)
css/styles.css       Tots els estils (mobile-first, responsive)
js/data.js           ÚNIC fitxer a editar per canviar textos, preus, telèfon, horaris...
js/main.js           Lògica: renderitza la carta/productes a partir de data.js, menú mòbil
assets/img/          Fotografies (logo, hero, etc.) — encara pendents d'afegir
```

## Com fer canvis bàsics (sense tocar HTML/CSS/JS de lògica)

Obre `js/data.js` i edita:

- **`CONFIG`** — telèfon, WhatsApp, adreça, horaris, xarxes socials i mapa.
- **`MENU`** — pizzes de la carta, agrupades per categoria.
- **`EXTRAS`** — ingredients addicionals i el seu preu.
- **`PRODUCTS`** — productes italians per emportar (pasta, embotits, formatges, vins...).
  Actualment buit; afegeix objectes `{ name, description, price }`.
- **`DESSERTS`** — postres artesanals, mateix format que `PRODUCTS`.

## Pendent d'afegir (marcat amb `TODO` a `js/data.js`)

- [x] Telèfon (`CONFIG.phoneDisplay`, `phoneLink`) i adreça (`CONFIG.address`) reals
- [x] Mapa de Google Maps amb l'adreça real (`CONFIG.mapsEmbedSrc`)
- [x] Horaris definitius (`CONFIG.hours`)
- [x] Logo (`assets/img/logo.png`, amb favicon i apple-touch-icon generats)
- [x] Postres artesanals (`DESSERTS` a `js/data.js`)
- [x] Foto de fons del Hero (`assets/img/hero.jpg` per escriptori, `hero-mobile.jpg` per mòbil)
- [ ] Confirmar si el número de WhatsApp és el mateix que el de telèfon
      (ara mateix s'utilitza `602 54 57 89` per a totes dues coses — `CONFIG.whatsappNumber`)
- [ ] Més fotografies pròpies (pizzes, productes, local...) a `assets/img/`
- [ ] Llistat definitiu de productes italians per emportar (`PRODUCTS` a `js/data.js`)
- [ ] Substituir el logo actual (extret d'una captura/gravació de pantalla) per l'arxiu
      original en alta qualitat quan el tinguis disponible

## Provar en local

No cal cap instal·lació. Basta obrir `index.html` al navegador, o bé servir la carpeta
amb qualsevol servidor estàtic, per exemple:

```
python3 -m http.server 8000
```

i visitar `http://localhost:8000`.
