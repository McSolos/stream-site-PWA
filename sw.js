self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./index.html","./assets/css/oldstyle.css", "./assets/otherHTML/profile.html" ,
                                "/assets/thumnails/thumbnail1.png", "/assets/thumnails/thumbnail2.png",
                                "/assets/thumnails/thumbnail3.png", "/assets/thumnails/thumbnail4.png",
                                "/assets/thumnails/thumbnail5.png", "./assets/icons/icon-192x192.png",
                                "./assets/icons/icon-512x512.png","./assets/images/maxresdefault.jpg",
                                "./assets/images/now.webp", "./play.html", "./assets/images/africa.avif",
                                "./assets/images/aljazera.png", "./assets/images/cgt.jfif","./assets/images/natgeo.jfif",
                                "/assets/images/cover.webp", "./assets/images/profile.webp",
                                "https://fonts.googleapis.com/icon?family=Material+Icons",
                                "https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"
                                ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );

});