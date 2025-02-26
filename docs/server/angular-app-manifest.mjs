
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
    'index.csr.html': {size: 56888, hash: '35b663a123704da585237f5c0aecfbd5dbf02cf8c02068d9b220c3fa94c773dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17188, hash: '69a3210e114e0dd7701d1943ce3277158465c9294a33cb914eaf3950e6d0ea12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105782, hash: '874f0481fc2a4326ba190e298813e9a6a668993e0b6df672d0a28be5085b81b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UQXLRT5L.css': {size: 315784, hash: 'lKsQOlLoEps', text: () => import('./assets-chunks/styles-UQXLRT5L_css.mjs').then(m => m.default)}
  },
};
