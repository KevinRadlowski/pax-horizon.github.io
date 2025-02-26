
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
    'index.csr.html': {size: 57992, hash: '45c0a24bfd62275503ceecd1a18279ec10de0e3f10a1c30b931a1f19eece5e68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18292, hash: '90635f5a4914f77f08d9d882b51c69471f9579b3bc7fab793ed3bcdc480ab332', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108756, hash: '1d45b0749334900cadd1db530c5b6519cae6f4ca4444052e5d8d3b92b3a43c6f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZHNIAXMZ.css': {size: 315824, hash: 'LUrjEnCaupQ', text: () => import('./assets-chunks/styles-ZHNIAXMZ_css.mjs').then(m => m.default)}
  },
};
