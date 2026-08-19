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

## Pendent d'afegir (marcat amb `TODO` a `js/data.js`)

- [ ] Telèfon i número de WhatsApp reals (`CONFIG.phoneDisplay`, `phoneLink`, `whatsappNumber`)
- [ ] Adreça exacta (`CONFIG.address`)
- [ ] URL d'incrustació de Google Maps amb l'adreça real (`CONFIG.mapsEmbedSrc`) — es
      genera des de Google Maps: *Comparteix → Incrusta un mapa*
- [ ] Horaris definitius (`CONFIG.hours`)
- [ ] Logo i fotografies pròpies a `assets/img/`
      - Un cop tinguis la foto del hero, afegeix-la a `assets/img/hero.jpg` i activa la
        línia `background-image` comentada a `.hero` dins de `css/styles.css`.
- [ ] Llistat definitiu de productes italians (`PRODUCTS` a `js/data.js`)

## Provar en local

No cal cap instal·lació. Basta obrir `index.html` al navegador, o bé servir la carpeta
amb qualsevol servidor estàtic, per exemple:

```
python3 -m http.server 8000
```

i visitar `http://localhost:8000`.
