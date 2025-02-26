
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
    'index.csr.html': {size: 58259, hash: 'f4399c1131f45b3c871fc4249bed6624fa6ba6b1f3aa653b645bbe1877e2a5c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18559, hash: '746f30f5c9eded458892e02ad48efb853d640d6e1cd9f583b8646c31c9af0d6a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109312, hash: 'e48ef23e01ac4cea78359812fde954a4a71b53f4aea6ac56875058dd987a9386', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZHNIAXMZ.css': {size: 315824, hash: 'LUrjEnCaupQ', text: () => import('./assets-chunks/styles-ZHNIAXMZ_css.mjs').then(m => m.default)}
  },
};
