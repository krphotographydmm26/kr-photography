const CACHE='kr-photography-v99';
const ASSETS=["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./a6d777a0-b8f7-4b08-8c96-fe50445d0532.jpeg", "./IMG_1569.jpeg", "./IMG_1570.jpeg", "./IMG_1571.jpeg", "./IMG_1572.jpeg", "./IMG_1573.jpeg", "./IMG_1574.jpeg", "./IMG_1575.jpeg", "./IMG_1576.jpeg", "./IMG_1578.jpeg", "./IMG_1579.jpeg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./'))));});
