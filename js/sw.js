const CACHE_NAME = 'mariusz-baran-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/js/*',
  '/img/*',
  '/css/*'
];

self.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME);
  console.log('opened cache');
  await cache.addAll(urlsToCache);
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response)
        return response;
      return fetch(event.request);
    })
  )
})