/* =========================================================
   Plan Nutricional — navegación, datos y autoguardado
   ========================================================= */

/* ---------- Datos (extraídos del PDF) ---------- */
const DATA = {
  comida1: [
    {
      id: "c1-a",
      tag: "Dulce · Económica",
      title: "Avena cremosa casera + huevos al lado",
      kcal: "~650 kcal · 40–45 g proteína",
      items: [
        "Avena dulce: 70 g de hojuelas cocidas en agua con canela, 1 guineo mediano en rodajas y 15 g de maní tostado.",
        "3 huevos enteros cocidos (duros) o revueltos con una pizca de sal, servidos aparte."
      ]
    },
    {
      id: "c1-b",
      tag: "Dulce · Rápida y saciante",
      title: "Tostadas francesas de sartén",
      kcal: "~650 kcal · 40–45 g proteína",
      items: [
        "Batir 3 huevos enteros con un chorrito de agua o leche, vainilla y canela en polvo.",
        "Remojar 3 rebanadas de pan de caja o 2 panes franceses; dorar en sartén con una gota de aceite.",
        "Coronar con 1 cucharada de miel pura de abeja y 1 fruta fresca picada."
      ]
    },
    {
      id: "c1-c",
      tag: "Salada · Típico equilibrado",
      title: "Tradicional con frijoles y queso",
      kcal: "~650 kcal · 40–45 g proteína",
      items: [
        "3 huevos enteros estrellados o revueltos con tomate, chile dulce y cebolla.",
        "1/2 taza de frijoles molidos o cocidos de la olla (sin manteca).",
        "2 tortillas de maíz calientes o 2 panes franceses tostados + 35 g de queso fresco o cuajada baja en sal."
      ]
    }
  ],

  comida2: [
    {
      id: "c2-1",
      tag: "Máxima densidad proteica",
      title: "Pollo criollo con arroz y frijoles de olla",
      kcal: "~750 kcal · 50 g proteína",
      items: [
        "200 g de pechuga de pollo o muslo deshuesado sin piel, a la plancha o en salsa casera de tomate.",
        "250 g de arroz blanco cocido (aprox. 1 taza y media colmada) + 1/2 taza de frijoles enteros cocidos.",
        "Ensalada verde libre (lechuga, tomate, pepino y rábano) con abundante limón y sal."
      ]
    },
    {
      id: "c2-2",
      tag: "Carbohidrato de digestión eficiente",
      title: "Atún escurrido con papas machacadas",
      kcal: "~750 kcal · 50 g proteína",
      items: [
        "2 latas de atún en agua bien escurridas (aprox. 160–180 g de atún).",
        "2 papas medianas (~350 g) cocidas y en puré casero con cebolla, cilantro y 1 cdta de aceite.",
        "2 tortillas de maíz para acompañar."
      ]
    },
    {
      id: "c2-3",
      tag: "Hierro y densidad mineral",
      title: "Carne molida magra guisada con arroz",
      kcal: "~750 kcal · 50 g proteína",
      items: [
        "200 g de carne molida de res (sin exceso de grasa) guisada con papa picada, zanahoria y tomate.",
        "250 g de arroz blanco caliente al vapor.",
        "Ensalada de repollo morado rallado con limón fresco."
      ]
    }
  ],

  comida3: [
    {
      id: "c3-1",
      tag: "Digestión nocturna óptima",
      title: "Tacos caseros de pollo deshebrado",
      kcal: "~650–700 kcal · 40–45 g proteína",
      items: [
        "180 g de pechuga de pollo desmenuzada y salteada con cebolla y tomate.",
        "3 tortillas de maíz calientes con 1/3 de taza de frijoles caseros machacados.",
        "Pico de gallo fresco al gusto y rodajas de pepino al lado."
      ]
    },
    {
      id: "c3-2",
      tag: "Requesón = caseína económica",
      title: "Revuelto de huevos, frijoles y requesón",
      kcal: "~650–700 kcal · 40–45 g proteína",
      items: [
        "3 huevos enteros revueltos con espinacas o ejotes picados.",
        "1/2 taza de frijoles molidos cocinados sin grasa animal.",
        "60 g de requesón magro de mercado.",
        "2 tortillas de maíz o 1 pan francés tostado."
      ]
    },
    {
      id: "c3-3",
      tag: "Preparación en 5 minutos",
      title: "Sándwich doble de pollo o atún",
      kcal: "~650–700 kcal · 40–45 g proteína",
      items: [
        "150 g de pechuga de pollo cocida picada (o 1.5 latas de atún en agua escurridas).",
        "4 rebanadas de pan de molde (2 sándwiches dobles) con mostaza, lechuga y tomate.",
        "1 naranja o 1 plátano pequeño como postre digestivo."
      ]
    }
  ],

  preentreno: [
    {
      id: "pe-1",
      tag: "Glucógeno inmediato",
      title: "Fruta + cafeína natural",
      kcal: "~180 kcal",
      items: [
        "1 plátano / guineo mediano maduro.",
        "1 taza de café negro caliente o frío (sin azúcar agregada; endulzante opcional)."
      ]
    },
    {
      id: "pe-2",
      tag: "Carga limpia",
      title: "Tostadas rápidas dulces",
      kcal: "~220 kcal",
      items: [
        "2 panes franceses tostados o 2 rebanadas de pan de molde blanco.",
        "1 cucharada de mermelada de frutas o miel natural de abeja."
      ]
    },
    {
      id: "pe-3",
      tag: "Energía sostenida",
      title: "Fruta con maní simple",
      kcal: "~240 kcal",
      items: [
        "1 manzana entera o 1 plátano mediano.",
        "20 g de maní tostado simple, sin sal ni aceites añadidos (un puñado pequeño)."
      ]
    }
  ]
};

const HYDRATION = {
  goalMl: 4000,
  bottleMl: 740,
  goalBottles: 6,
  maxBottles: 10
};

const VALID_TABS = ["comida1", "comida2", "comida3", "preentreno", "hidratacion"];
const TOAST_MS = 2000;

/* ---------- Estado ---------- */
const state = {
  activeTab: "comida1",
  selections: { comida1: null, comida2: null, comida3: null, preentreno: null },
  bottles: 0
};

/* ---------- Persistencia local (caché principal) ---------- */
// Una clave por día: cada día empieza limpio, y durante el día todo se conserva.
const STORAGE_KEY = "plan-nutricional-" + new Date().toLocaleDateString('en-CA');

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);

    if (saved.selections) {
      Object.keys(state.selections).forEach((tab) => {
        const id = saved.selections[tab];
        // Solo se restaura si la opción todavía existe en los datos
        if (id && DATA[tab].some((o) => o.id === id)) state.selections[tab] = id;
      });
    }
    if (Number.isInteger(saved.bottles) && saved.bottles >= 0) {
      state.bottles = Math.min(saved.bottles, HYDRATION.maxBottles);
    }
    if (VALID_TABS.includes(saved.activeTab)) state.activeTab = saved.activeTab;
  } catch (e) { /* almacenamiento no disponible o JSON dañado */ }
}

function persistState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selections: state.selections,
        bottles: state.bottles,
        activeTab: state.activeTab
      })
    );
  } catch (e) { /* almacenamiento no disponible */ }
}

/* ---------- Referencias DOM ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const views = $$(".view");
const navItems = $$(".nav-item");
const titleEl = $("#tab-title");

/* ---------- Toast ---------- */
const toastEl = $("#toast");
const toastText = $("#toast-text");
let toastTimer = null;

function mostrarToast(texto) {
  toastText.textContent = texto;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer); // si llegan toques seguidos, reinicia el conteo
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), TOAST_MS);
}
/* ---------- Sincronización individual con la BD ---------- */
/* ---------- Sincronización individual con la BD ---------- */
const URL_API = "https://script.google.com/macros/s/AKfycbwM-HofNlJFcJBCX2XZLrfqi45mKO9RlHTPeyvv8JsK3iFzBfW-CcYgZKrHQVedVGPqgw/exec"; // 

const MAPEO_COLUMNAS = {
  "comida1": "Comida_1",
  "comida2": "Comida_2",
  "comida3": "Comida_3",
  "preentreno": "Pre_entreno",
  "agua_botellas": "Agua_Botellas" 
};

// Se requiere para evitar el error que brickeó la app
const ultimoSincronizado = {};

function obtenerFechaHoy() {
  const hoy = new Date();
  return hoy.toLocaleDateString('es-ES'); 
}

// Función auxiliar para enviar datos a Sheets sin repetir código
async function enviarASheets(columna, valor_final) {
  try {
    await fetch(URL_API, {
      method: "POST",
      body: JSON.stringify({ 
        fecha: obtenerFechaHoy(), 
        campo: columna, 
        valor: valor_final 
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });
  } catch (error) {
    console.error("Error al enviar:", error);
  }
}

async function sincronizarDato(campo, valor) {
  console.log("Sincronizando con BD ->", campo, ":", valor);

  // Lógica para saber si mostrar "Guardado" o "Actualizado"
  const previo = ultimoSincronizado[campo];
  const eraNuevo = previo === undefined || previo === "" || previo === null;
  ultimoSincronizado[campo] = valor;

  // Lógica Especial: Si el campo es el del agua, enviamos botellas Y mililitros
  if (campo === "agua_botellas" || campo === "bottles" || campo === "hidratacion") {
    await enviarASheets("Agua_Botellas", valor);
    await enviarASheets("Agua_ml", valor * 740);
    mostrarToast("Actualizado");
    return; // Detenemos la función aquí para el agua
  }

  // Lógica normal para Comidas y Pre-entreno
  const campoExcel = MAPEO_COLUMNAS[campo] || campo;
  await enviarASheets(campoExcel, valor);
  mostrarToast(eraNuevo && valor !== "" ? "Guardado" : "Actualizado");
}

/* ---------- Notificaciones (Toast) ---------- */
function mostrarToast(mensaje) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    // Estilos inline básicos por si faltan en tu CSS
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    toast.style.backdropFilter = "blur(10px)";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "20px";
    toast.style.fontSize = "14px";
    toast.style.zIndex = "9999";
    toast.style.transition = "opacity 0.3s ease";
    document.body.appendChild(toast);
  }
  toast.innerText = mensaje;
  toast.style.opacity = "1";
  
  // Ocultar después de 2 segundos
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}
/* ---------- Render de tarjetas ---------- */
const CHECK_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function renderCards(tabKey) {
  const container = $("#cards-" + tabKey);
  container.innerHTML = DATA[tabKey]
    .map((opt) => {
      const selected = state.selections[tabKey] === opt.id;
      return `
        <button type="button" class="card${selected ? " is-selected" : ""}"
                data-tab="${tabKey}" data-id="${opt.id}" aria-pressed="${selected}">
          <div class="card__top">
            <div>
              <span class="card__tag">${escapeHTML(opt.tag)}</span>
              <h3 class="card__title">${escapeHTML(opt.title)}</h3>
              <p class="card__kcal">${escapeHTML(opt.kcal)}</p>
            </div>
            <span class="card__check">${CHECK_SVG}</span>
          </div>
          <ul class="card__list">
            ${opt.items.map((i) => `<li>${escapeHTML(i)}</li>`).join("")}
          </ul>
        </button>`;
    })
    .join("");
}

function selectOption(tabKey, id) {
  // Solo una opción por pestaña; tocar la ya seleccionada la deselecciona
  const deselecting = state.selections[tabKey] === id;
  state.selections[tabKey] = deselecting ? null : id;

  $$(`#cards-${tabKey} .card`).forEach((card) => {
    const isSel = card.dataset.id === state.selections[tabKey];
    card.classList.toggle("is-selected", isSel);
    card.setAttribute("aria-pressed", String(isSel));
  });

  // 1) Caché local al instante  2) Sincronización del dato individual
  persistState();
  const opt = DATA[tabKey].find((o) => o.id === state.selections[tabKey]);
  sincronizarDato(tabKey, opt ? opt.title : "");
}

/* ---------- Navegación por pestañas ---------- */
function showTab(tabKey, { scroll = true } = {}) {
  state.activeTab = tabKey;
  views.forEach((v) => v.classList.toggle("is-active", v.dataset.tab === tabKey));
  navItems.forEach((n) => n.classList.toggle("is-active", n.dataset.target === tabKey));
  const activeView = views.find((v) => v.dataset.tab === tabKey);
  titleEl.textContent = activeView ? activeView.dataset.title : "";
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  persistState(); // recuerda la pestaña (sin sincronizar con la BD ni mostrar toast)
}

/* ---------- Hidratación ---------- */
const RING_LENGTH = 2 * Math.PI * 94; // circunferencia del anillo (r = 94)

function updateHydration() {
  const ml = state.bottles * HYDRATION.bottleMl;
  const pct = Math.min(ml / HYDRATION.goalMl, 1);

  $("#ring-bar").style.strokeDasharray = RING_LENGTH.toFixed(2);
  $("#ring-bar").style.strokeDashoffset = (RING_LENGTH * (1 - pct)).toFixed(2);
  $("#hydro-percent").textContent = Math.round((ml / HYDRATION.goalMl) * 100) + "%";
  $("#hydro-bottles").textContent = `${state.bottles} / ${HYDRATION.goalBottles} Botellas`;
  $("#hydro-ml").textContent = `${ml} ml / ${HYDRATION.goalMl} ml`;

  $("#btn-minus").disabled = state.bottles <= 0;
  $("#btn-plus").disabled = state.bottles >= HYDRATION.maxBottles;
}

function changeBottles(delta) {
  const next = state.bottles + delta;
  if (next < 0 || next > HYDRATION.maxBottles) return;
  state.bottles = next;
  updateHydration();
  persistState();
  sincronizarDato("agua_botellas", state.bottles);
}

/* ---------- Eventos ---------- */
function bindEvents() {
  navItems.forEach((btn) =>
    btn.addEventListener("click", () => showTab(btn.dataset.target))
  );

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) selectOption(card.dataset.tab, card.dataset.id);
  });

  $("#btn-plus").addEventListener("click", () => changeBottles(1));
  $("#btn-minus").addEventListener("click", () => changeBottles(-1));

  // Red de seguridad: si la app pasa a segundo plano o se cierra, se vuelve a guardar
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") persistState();
  });
  window.addEventListener("pagehide", persistState);
}

/* ---------- Inicio ---------- */
function init() {
  loadState();

  // Lo restaurado cuenta como ya sincronizado (el siguiente cambio será "Actualizado")
  Object.keys(state.selections).forEach((tab) => {
    const opt = DATA[tab].find((o) => o.id === state.selections[tab]);
    if (opt) ultimoSincronizado[tab] = opt.title;
  });
  if (state.bottles > 0) ultimoSincronizado.agua_botellas = state.bottles;

  Object.keys(DATA).forEach(renderCards);
  updateHydration();
  bindEvents();

  $("#today-label").textContent = new Date().toLocaleDateString("es-SV", {
    weekday: "short", day: "numeric", month: "short"
  });

  showTab(state.activeTab, { scroll: false });
}

document.addEventListener("DOMContentLoaded", init);
/* ---------- Registro de Service Worker (Para instalación PWA) ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito', reg))
      .catch(err => console.warn('Error al registrar el Service Worker', err));
  });
}