// Este código es un requisito de Chrome para reconocer la PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Aquí puedes agregar lógica offline en el futuro
});