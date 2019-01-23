var duration = 10000;

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    registerSW(navigator);
  });
}

function registerSW(navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function (reg) {
      console.log('ServiceWorker registration successful with scope: ', reg.scope);
      reg.update();
    })
    .catch(function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  setTimeout(function () {
    registerSW(navigator);
  }, duration);
}
