/* ATS Resume Optimiser service worker: keeps the app files on the device so it opens with no internet.
   Change VERSION whenever you upload a new index.html so devices pick up the update. */
var VERSION = "atsresume-12";
var FILES = ["./", "./index.html", "./install.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./vendor/pdf-lib.min.js", "./vendor/jszip.min.js"];
var CORE = FILES.filter(function (f) { return f.indexOf("vendor/") < 0; }), VENDOR = FILES.filter(function (f) { return f.indexOf("vendor/") >= 0; });
/* core files must be saved; the export libraries are saved on a best-effort basis so a missing file never blocks the install */
self.addEventListener("install", function (e) { e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE).then(function () { return Promise.all(VENDOR.map(function (u) { return c.add(u).catch(function () {}); })); }); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener("activate", function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(function (hit) {
    var net = fetch(e.request).then(function (r) { if (r && (r.ok || r.type === "opaque")) { var cp = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, cp); }); } return r; }).catch(function () { return hit; });
    return hit || net;
  }));
});
