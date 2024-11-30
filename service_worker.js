
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html', // Ensure index.html is cached
        '/manifest.json',  // Cache the manifest file
        'images/icons/desktop.png',  // Cache 192x192 icon
        'images/icons/mobile.png',  // Cache 512x512 icon
        // Add any other necessary files
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});



