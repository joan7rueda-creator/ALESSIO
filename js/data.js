/**
 * data.js — Dades del negoci, la carta de pizzes i els productes italians.
 *
 * Aquest és l'ÚNIC fitxer que hauries de tocar per fer canvis bàsics:
 * - Telèfon, WhatsApp, adreça i horaris -> objecte CONFIG
 * - Pizzes de la carta -> array MENU
 * - Extres (ingredients addicionals) -> array EXTRAS
 * - Productes italians per emportar -> array PRODUCTS
 * - Postres artesanals -> array DESSERTS
 *
 * No cal tocar cap altre fitxer (.html / .css / .js) per afegir,
 * eliminar o editar preus, noms o descripcions.
 */

/* =========================================================
   1. DADES DEL NEGOCI
   ========================================================= */
const CONFIG = {
  businessName: "Pizzeria di Alessio",
  tagline: "Pizza artesanal italiana, per emportar",
  city: "Sant Celoni",
  province: "Barcelona",

  address: "Carrer de l'Abat Oliba, 2, 08470 Sant Celoni (Barcelona)",
  phoneDisplay: "602 54 57 89",
  phoneLink: "+34602545789", // format internacional, sense espais
  // TODO: confirma si el número de WhatsApp és el mateix que el de telèfon;
  // de moment s'utilitza el mateix número per a totes dues coses.
  whatsappNumber: "34602545789", // format internacional, sense el "+" ni espais
  whatsappMessage: "Hola! Voldria fer una comanda per emportar a Pizzeria di Alessio.",

  // Enllaç d'incrustació de Google Maps amb l'adreça del local.
  mapsEmbedSrc: "https://www.google.com/maps?q=Carrer+de+l%27Abat+Oliba%2C+2%2C+08470+Sant+Celoni%2C+Barcelona&output=embed",

  // Enllaç normal de Google Maps (per al botó "Com arribar-hi").
  mapsLinkUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+l%27Abat+Oliba+2%2C+08470+Sant+Celoni%2C+Barcelona",

  // Horaris d'obertura. Posa "null" en "close" els dies que estigui tancat.
  hours: [
    { day: "Dilluns", open: null, close: null },
    { day: "Dimarts", open: "18:00", close: "22:30" },
    { day: "Dimecres", open: "18:00", close: "22:30" },
    { day: "Dijous", open: "18:00", close: "22:30" },
    { day: "Divendres", open: "18:00", close: "23:00" },
    { day: "Dissabte", open: "18:00", close: "23:00" },
    { day: "Diumenge", open: "18:00", close: "22:30" },
  ],

  // Xarxes socials. Deixa el camp buit ("") per amagar el botó corresponent.
  social: {
    instagram: "",
    facebook: "",
  },

  footerNote:
    "A les nostres pizzes només utilitzem productes de primera qualitat, d'origen italià i de proximitat.",
};

/* =========================================================
   2. CARTA DE PIZZES
   Cada categoria té un títol i una llista d'items.
   Cada item: { name, price, ingredients }
   El preu es mostra tal qual (pot incloure "€").
   ========================================================= */
const MENU = [
  {
    category: "Pizzes clàssiques",
    items: [
      { name: "Margherita", price: "9€", ingredients: "Salsa de tomàquet, mozzarella, alfàbrega." },
      { name: "Marinara", price: "9,50€", ingredients: "Salsa de tomàquet, tomàquet xerri, all, pebre negre i alfàbrega." },
      { name: "Romana", price: "11€", ingredients: "Salsa de tomàquet, mozzarella, pernil dolç, orenga." },
      { name: "Diavola", price: "11€", ingredients: "Salsa de tomàquet, mozzarella, spianata picant." },
      { name: "Vegetariana", price: "11€", ingredients: "Salsa de tomàquet, mozzarella, verdures al forn (carbassó i albergínia) i xampinyons." },
      { name: "Sficione", price: "12,50€", ingredients: "Salsa de tomàquet, ceba, anxoves, orenga, pecorino, pebre negre." },
      { name: "Bolognese", price: "13€", ingredients: "Mozzarella, salsa bolonyesa, parmesà." },
      { name: "Pollo Bravo", price: "13€", ingredients: "Salsa de tomàquet, mozzarella, pollastre, patates al forn, jalapeños, oli picant." },
      { name: "5 Formatges", price: "13€", ingredients: "Mozzarella, gorgonzola, provola fumada, parmesà, pecorino." },
      { name: "Barbacoa", price: "13€", ingredients: "Salsa de tomàquet, mozzarella, carn picada, bacó, ceba, salsa barbacoa." },
      { name: "Siciliana", price: "13€", ingredients: "Salsa de tomàquet, mozzarella, tonyina, ceba, olives, tàperes, orenga, pebre negre." },
      { name: "Caprichosa", price: "14€", ingredients: "Salsa de tomàquet, mozzarella, xampinyons, carxofes, ou, pernil dolç." },
      { name: "Otoño", price: "13€", ingredients: "Crema de carbassa, xampinyons, ceba, grans de festuc." },
      { name: "La Hortelana", price: "13€", ingredients: "Salsa de tomàquet, alfàbrega, verdures al forn (carbassó i albergínia) i ceba." },
    ],
  },
  {
    category: "Les nostres especials",
    items: [
      { name: "De la Nonna", price: "14€", ingredients: "Mozzarella, crema de xampinyons, bacó, parmesà." },
      { name: "Pizza di Alessio", price: "14€", ingredients: "Mozzarella, crema de carbassa, guanciale, pecorino." },
      { name: "Carbonara", price: "14€", ingredients: "Mozzarella, ou, guanciale, pecorino, pebre negre." },
      { name: "Miel y Mar", price: "14€", ingredients: "Mozzarella, anxoves, formatge de cabra, mel." },
      { name: "Boscaiola", price: "15€", ingredients: "Mozzarella, botifarra, xampinyons, crema de tòfona." },
      { name: "Italiana", price: "15€", ingredients: "Salsa de tomàquet, mozzarella, tomàquet xerri, ruca, pernil salat italià, parmesà." },
      { name: "Porchetta", price: "15€", ingredients: "Mozzarella, porchetta (carn de porc rostida), provola fumada." },
      { name: "Pistachosa", price: "15€", ingredients: "Mozzarella, ruca, mortadel·la amb festuc, burrata, grans de festuc." },
      { name: "Calzone Clasico", price: "12€", ingredients: "Mozzarella, pernil dolç." },
      { name: "Calzone Picante", price: "12€", ingredients: "Mozzarella, spianata picant (xoriço italià picant)." },
    ],
  },
  {
    category: "Les nostres novetats",
    items: [
      { name: "Pizza Bambino", price: "11€", ingredients: "Salsa de tomàquet, mozzarella, frankfurt i patates al forn." },
      { name: "Amatriciana", price: "13€", ingredients: "Salsa de tomàquet, guanciale, formatge pecorino (ovella), pebre negre." },
      { name: "Gricia", price: "13€", ingredients: "Mozzarella, guanciale, formatge pecorino (ovella), pebre negre." },
      { name: "Cheff", price: "14€", ingredients: "Salsa de tomàquet, mozzarella, tomàquet xerri, all, guanciale, pebre negre." },
      { name: "Rústica", price: "14€", ingredients: "Salsa de tomàquet, mozzarella, olives, ceba, tomàquet sec, salami napolità." },
      { name: "Búfala", price: "14€", ingredients: "Salsa de tomàquet, mozzarella de búfala, alfàbrega, tomàquet xerri." },
      { name: "Caprina", price: "14€", ingredients: "Mozzarella, formatge de cabra, verdures al forn, anxoves, pebrot vermell." },
    ],
  },
];

/* =========================================================
   3. EXTRES (ingredients addicionals per personalitzar la pizza)
   ========================================================= */
const EXTRAS = [
  {
    group: "Verdures / ingredients",
    items: [
      { name: "Ceba", price: "1,50€" },
      { name: "Olives", price: "1,50€" },
      { name: "Xampinyons", price: "1,50€" },
      { name: "Carxofes", price: "1,50€" },
      { name: "Carbassó", price: "1,50€" },
      { name: "Ruca", price: "1,50€" },
      { name: "Albergínia", price: "1,50€" },
      { name: "Tomàquet xerri", price: "2,00€" },
    ],
  },
  {
    group: "Formatges",
    items: [
      { name: "Mozzarella", price: "2,00€" },
      { name: "Provola fumada", price: "2,00€" },
      { name: "Pecorino", price: "2,50€" },
      { name: "Parmigiano", price: "2,50€" },
      { name: "Gorgonzola", price: "3,00€" },
      { name: "Formatge de cabra", price: "3,00€" },
      { name: "Burrata", price: "3,80€" },
      { name: "Búfala", price: "3,80€" },
    ],
  },
  {
    group: "Salses / complements",
    items: [
      { name: "Oli picant", price: "1,00€" },
      { name: "Salsa barbacoa", price: "1,50€" },
      { name: "Crema de carbassa", price: "2,00€" },
      { name: "Salsa bolonyesa", price: "3,00€" },
    ],
  },
  {
    group: "Carn / altres",
    items: [
      { name: "Ou", price: "1,20€" },
      { name: "Bacó", price: "2,00€" },
      { name: "Tonyina", price: "2,00€" },
      { name: "Botifarra", price: "2,00€" },
      { name: "Pollastre", price: "2,50€" },
      { name: "Pernil dolç", price: "2,00€" },
      { name: "Spianata picant", price: "2,00€" },
      { name: "Mortadella", price: "3,00€" },
      { name: "Guanciale", price: "3,00€" },
      { name: "Anxoves", price: "3,00€" },
      { name: "Porchetta", price: "3,50€" },
      { name: "Pernil italià", price: "3,50€" },
    ],
  },
];

/* =========================================================
   4. PRODUCTES ITALIANS PER EMPORTAR
   Pendent d'incorporar el llistat definitiu (pasta, embotits,
   formatges, vins...). Afegeix aquí cada producte amb aquest format:
   { name: "Nom del producte", description: "Breu descripció", price: "0,00€", image: "assets/img/nom-fitxer.jpg" }
   El camp "image" és opcional: si no s'indica, es mostra un
   monograma decoratiu en el seu lloc.
   ========================================================= */
const PRODUCTS = [
  // Exemple (elimina'l o edita'l quan tinguis els productes reals):
  // { name: "Pasta fresca all'uovo", description: "Tagliatelle artesanals italianes, 250g.", price: "4,50€" },
];

/* =========================================================
   5. POSTRES ARTESANALS
   Mateix format que PRODUCTS: { name, description, price, image? }
   ========================================================= */
const DESSERTS = [
  { name: "Tiramisù de pistacchio", price: "6€", description: "Crumble trencat, mascarpone, crema de festuc de Bronte." },
  { name: "Pan di stelle", price: "6€", description: "Galeta de xocolata, mascarpone, nutella, nata." },
  { name: "Ricotta e pera", price: "6€", description: "Galeta amb ricotta (formatge d'ovella) i trossos de pera fresca." },
  { name: "Cheese cake", price: "6€", description: "Base de crumble amb crema de formatge Philadelphia i gelatina de fruits del bosc." },
  { name: "Mousse Selva negra", price: "6€", description: "Xocolata fundent negre amb cor de cirera." },
  { name: "Mousse Gianduiotto", price: "6€", description: "Mousse de xocolata amb llet glacejat amb avellanes del Piemont." },
  { name: "Cannolo Siciliano", price: "5€", description: "Massa fregida farcida de ricotta." },
];
