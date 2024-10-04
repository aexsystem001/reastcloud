'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6eaddcdf5daef46bce133ca0562b22ac",
"index.html": "5609c8d5c7fbd3334ddedcceaf83419b",
"/": "5609c8d5c7fbd3334ddedcceaf83419b",
"main.dart.js": "6645d30cf81276141fbfaddbbe77eb83",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60b67af0e382a9559ce77bf716545b5d",
"assets/AssetManifest.json": "bbdbf985e591594f96131f332bda8aee",
"assets/NOTICES": "ce5ffe7829be4ffc0e29e4da555b72d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "eea128a6fc431a02c96f6a1def31fa40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ce00ccee6edacdbee6c832f8d84f9f43",
"assets/fonts/MaterialIcons-Regular.otf": "c56c516c275b341e1d707c8bf615d6f2",
"assets/assets/Metal2.jpg": "2b7dcb68938a1dcfbb5e0f303e69f521",
"assets/assets/ads.png": "7b27d9392c4fab8dc5143f140348358c",
"assets/assets/Genre.jpeg": "06cae5d9951776ecdde1318c760bfca0",
"assets/assets/blank%252010003ms.mp3": "ec40584f28c4af24cf0a37ff46d3661c",
"assets/assets/aex_logo.png": "08b35563d4ca69bc677f0717700ac18a",
"assets/assets/playlist.png": "72970fe18305966dd631f47eaedd39fd",
"assets/assets/Funk.jpg": "b3163951bfc2754e1faa7172c5c14c72",
"assets/assets/music-player.png": "8db94a087255d53b45bb0c5fd59d39cd",
"assets/assets/Metal.jpg": "7441e8dfd6a168f88e0cd7aeb2cf8fef",
"assets/assets/Jazz2.jpg": "0e92aca2ef2d5dae42f03ecca3def5c4",
"assets/assets/Rap2.jpg": "888abcd2cbf048d8dee03f5a3971ff11",
"assets/assets/mic_green.png": "35201a223c22279b9c3d3207e48820f4",
"assets/assets/Blues2.jpg": "33e546f64f30f66296a877e48c674e8f",
"assets/assets/mic_grey.png": "714fe7d37fe7ff3473d40351edbd05dd",
"assets/assets/level.mp3": "58c8262673ecf2d5829c93a16b451ee2",
"assets/assets/Classical2.jpg": "443e963b930843d401ded083f3c4bd6a",
"assets/assets/playerbg.jpg": "3a2f2d30fb1ad67495b4331162e4dcd2",
"assets/assets/Rock2.jpg": "60e38e546b1bcbb6de10877bde9d74fd",
"assets/assets/tts.png": "972c6018179906f86d3b9966ced9faa6",
"assets/assets/tasklist.png": "7bc3677897ce90b59930c0875f035dd6",
"assets/assets/AEXcover.jpg": "50982e70d4d8670ae75151e065e9bdf3",
"assets/assets/blank%2520100ms.mp3": "1fe53e00ea09dc14755b0c9189b4fd6c",
"assets/assets/music.png": "72aa9219667336a068d09d3859bbb453",
"assets/assets/Blues.jpg": "6f9c0f7241c49c0428e141c57da7ae73",
"assets/assets/Classical.jpg": "053d6b0178499cb630a63aed11766eaf",
"assets/assets/Rock.jpg": "03902e94c68a5895373df22f86d34329",
"assets/assets/Rap.jpg": "34339b773d0989221eb8bf48e7bc2716",
"assets/assets/task.png": "0d62369d299fc05ff627558f95cfe4b5",
"assets/assets/EDM2.jpg": "72755a771db28d65c95e6132b4b92b91",
"assets/assets/ReastCloud.png": "03781bf3cf1a854aaf39724cd119324b",
"assets/assets/azanbox_icon.png": "89ce6903090310b80901b9794c76715c",
"assets/assets/Instrumental2.jpg": "62a88e0ccf355fbc26affc81ca6a0099",
"assets/assets/Genre2.jpeg": "a44eaf0ea977b2c767b406eff68e01ea",
"assets/assets/reastcloudmusic.png": "1cfdfb85983752daef47bf48b6554e41",
"assets/assets/musicplaylist.jpg": "f0d121a627a65408782ab2f6a61a67f6",
"assets/assets/Kellogs%2520advert%2520-%2520Eng.mp3": "6fe15c517ad755779d34ae4352066339",
"assets/assets/blank%25201248ms.mp3": "78b8e2e12b1c017bc30ba4e1aa2b46f1",
"assets/assets/cloud.png": "9040c6eaa6ed1b2dbbf52aae6e01f33e",
"assets/assets/schedule.png": "8f938037878924ea94bb6c92856071a6",
"assets/assets/sound-1.mp3": "2b0222d36b67fa0c28ebf9ac696136e0",
"assets/assets/Custom-Audio-Advert.png": "9d427387258b223f1cc78618d250b539",
"assets/assets/Pop.jpg": "bd64f890c4ed3fd0a4bc527067e15524",
"assets/assets/Jazz.jpg": "e11709cf7f39119e698bccba3d60f942",
"assets/assets/announcement.png": "29bb5b72b4d3f38bb080b019a7e7dc30",
"assets/assets/sound-2.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets/AEXcover4.jpg": "0cc86bf7ae8dd1cf9db2c0b0d6c07d29",
"assets/assets/blank1minute.mp3": "60173272c63a9790c07f4251be630197",
"assets/assets/Breakfast%2520offer-%2520Eng.mp3": "d8907525fc3930d775a7e3bfa726899e",
"assets/assets/Instrumental.jpg": "fe415a3dd80a025dbbe66c82e36b97ca",
"assets/assets/Chocolate%2520Cake%2520-%2520Eng.mp3": "6cb7802126482ba7294128a68ebf1487",
"assets/assets/AEXcover2.jpg": "bfa3b144cc7f99917d028200dcdd27ff",
"assets/assets/Pop2.jpg": "55ae74f1cfa2616bd068d3c1930d5ba8",
"assets/assets/Coca%2520Cola%2520Advert%2520-%2520Eng.mp3": "33f4284e6a99bc8aacd883b1d6e222c8",
"assets/assets/Funk2.jpg": "0fd75248723a6c453dfec2af70c5cb63",
"assets/assets/AEXcover3.jpg": "e3fb557424390d7be2c7999ac7c661a7",
"assets/assets/AzanBox.png": "6ca8645fb3271311fd451e2e8c0ad48c",
"assets/assets/Nescafe%2520advert%2520-%2520Eng.mp3": "d82a832cd959ab2214f3c6480332dc21",
"assets/assets/mic_orange.png": "746939c59de3d31a65543c2dddcd8763",
"assets/assets/EDM.jpg": "5522e6335f0dd62c6f2edc930333f573",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
