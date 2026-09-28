/* Minimal service worker — required for PWA install.
   It does not cache anything; the app loads live from Apps Script. */

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // Pass-through: always fetch from network.
  // Present so Chrome considers the app installable.
});
