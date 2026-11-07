// =====================================================================
//  Agenda — recibe los avisos push y los muestra como notificación.
//  Este archivo es igual para todas las clientas.
// =====================================================================

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; }
  catch (_) { d = { title: 'Agenda', body: e.data ? e.data.text() : '' }; }

  const base = self.registration.scope;
  e.waitUntil(self.registration.showNotification(d.title || 'Agenda', {
    body: d.body || '',
    icon: base + 'icono-192.png',
    badge: base + 'icono-192.png',
    tag: d.tag || undefined,
    renotify: !!d.tag,
    vibrate: [200, 100, 200],
    data: { url: base }
  }));
});

// Al tocar la notificación, abre la agenda (o la trae al frente si ya está abierta)
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((ventanas) => {
      for (const v of ventanas) {
        if (v.url.startsWith(self.registration.scope) && 'focus' in v) return v.focus();
      }
      return self.clients.openWindow(url);
    })
  );
});
