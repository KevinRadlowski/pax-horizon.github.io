
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pax-horizon.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pax-horizon.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 56888, hash: 'a8534adb357b2329e80d361b013fe3941b76e8998e482b7138751cce4bcb82b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17188, hash: '0aaaf2e68786ea8e439a535206b3f7512af75232212ce9892bd922f17584a537', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105772, hash: 'bb69a23a98a42a831829c7247046a1030f0ed8095855fef5583eef9583c9121d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UQXLRT5L.css': {size: 315784, hash: 'lKsQOlLoEps', text: () => import('./assets-chunks/styles-UQXLRT5L_css.mjs').then(m => m.default)}
  },
};
