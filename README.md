# 📱 Tracker Nutrición e Hidratación

Una Progressive Web App (PWA) minimalista, elegante y con enfoque Mobile-First, diseñada para el seguimiento diario de planes de recomposición corporal y consumo de agua. El proyecto utiliza **Google Sheets** como base de datos gratuita mediante una API construida con Google Apps Script.

## ✨ Características Principales

- **Experiencia Nativa (PWA):** Instalable en iOS y Android con íconos personalizados (`manifest.json` y Service Workers), funcionando a pantalla completa sin la interfaz del navegador.
- **Diseño Premium UI/UX:** Interfaz en *Dark Mode* puro, utilizando la tipografía Poppins, bordes suavizados y transiciones fluidas para una experiencia de alta gama.
- **Autoguardado en Tiempo Real (Auto-save):** Eliminación de los tradicionales botones de guardado. Cada interacción (seleccionar una comida o registrar agua) se sincroniza instantáneamente con la base de datos.
- **Lógica de Hidratación Inteligente:** Calcula automáticamente los mililitros consumidos en base a un estándar de botellas de 740ml, persiguiendo una meta diaria de 4 Litros.
- **Persistencia Local y Reseteo Automático:** Utiliza `localStorage` como caché principal para evitar la pérdida de datos. Implementa reseteo inteligente a la medianoche (hora local).
- **Notificaciones no intrusivas:** Sistema de "Toasts" elegantes que confirman el estado de la sincronización en segundo plano.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox/Grid), Vanilla JavaScript (ES6+).
- **PWA:** Service Workers (`sw.js`) y Web App Manifest.
- **Backend / Base de Datos:** Google Apps Script (Endpoint REST) + Google Sheets.
- **Despliegue:** Vercel.

## 🚀 Estructura de la Base de Datos
El sistema busca el día actual y actualiza dinámicamente celdas individuales dentro de una sola fila, utilizando la siguiente estructura:
`Fecha` | `Comida_1` | `Comida_2` | `Comida_3` | `Pre_entreno` | `Agua_Botellas` | `Agua_ml`

## ⚙️ Instalación y Uso Local

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/Hopeelex/tracker-nutrition.git](https://github.com/Hopeelex/tracker-nutrition.git)