
self.addEventListener('install', function(event){
    console.log("[Service Worker] Installing ...", event);
    event.waitUntil(
        caches.open('static')
        .then( (cache) => {
            console.log("[Service Worker] Precaching");
            cache.add('/');
            cache.add('/index.html')
            cache.add('/static/js/bundle.js')
            cache.add('/favicon.ico')
            cache.add('/manifest.json')
        })
    )
});


self.addEventListener('activate', function(event){
    console.log("[Service Worker] Activating ...", event);
    return self.clients.claim();
});


self.addEventListener('fetch', (event) =>{
    event.respondWith(
        caches.match(event.request)
        .then( function(response) {
            if (response){
                return response;
            } else{
                return fetch(event.request);
            }
        })
    )
})