
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
    'index.csr.html': {size: 57992, hash: 'b69330b09b14e486fc77c4d0fd43fb9a63abbff5e38dd7650d1988ec19aa8fd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18292, hash: '3a7937b25383214ba6bd6b7950c3deb8eb5e16ff08d611fc491f358beea4548a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 106923, hash: '7cfbcc289b6aadba646c92c2ede93ade1446b2acd2970fa14f2d4532512cb48a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZHNIAXMZ.css': {size: 315824, hash: 'LUrjEnCaupQ', text: () => import('./assets-chunks/styles-ZHNIAXMZ_css.mjs').then(m => m.default)}
  },
};
