
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
    'index.csr.html': {size: 58259, hash: '5ef69b1bfa70fe5f4e0f54a5d29d5914d87c7f54b4f9154473d3696c12fad0b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18559, hash: 'd47003e6935111c1b1de025fc8151c500c432df8a21ab0dd6bc23953b1a7c4ca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111047, hash: '25495a81634d395bf9bb479f3c2ae0ee9b4a0b253bc579c9a41eb4b50ee2e5db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZHNIAXMZ.css': {size: 315824, hash: 'LUrjEnCaupQ', text: () => import('./assets-chunks/styles-ZHNIAXMZ_css.mjs').then(m => m.default)}
  },
};
