if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://github.com/sagaribhandary/Paras-Anti-drone-Technology/blob/main/service_worker.js ')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
}
