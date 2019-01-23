var guid = '6903266c-a0c3-4fe5-8476-25a434e5c53b';

// update service worker automatically
self.addEventListener('install', () => {
  self.skipWaiting()
    .then(() => {
      console.log('you can reload your pages');
      // window.loaction.reload()
    });
});


importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  { url: '/', revision: guid },
  { url: '/register-sw.js', revision: guid },
]);

// workbox.routing.registerRoute(
//   // Cache CSS files
//   /.*\.css/,
//   // Use cache but update in the background ASAP
//   workbox.strategies.cacheFirst({
//     // Use a custom cache name
//     cacheName: 'css-cache',
//   })
// );

// workbox.routing.registerRoute(
//   // Cache CSS files
//   /.*\.js/,
//   // Use cache but update in the background ASAP
//   workbox.strategies.cacheFirst({
//     // Use a custom cache name
//     cacheName: 'js-cache',
//   })
// );

