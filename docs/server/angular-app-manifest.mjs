
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
    'index.csr.html': {size: 58259, hash: 'aff9bd668db21f2c9126152149e0a250a5f219c565e800a004162df924f4192b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18559, hash: '32ded36e1300de36cc4dc29c4c092ccdaa0850fff729ef3cb2edf3d4dbb1c5e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 114553, hash: '48a5e79a7c2ea30a7f13184575314514ff45d13ef18611c7e2313e2973338b4c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-77NQENLA.css': {size: 315824, hash: 'X+8K4uM0iuA', text: () => import('./assets-chunks/styles-77NQENLA_css.mjs').then(m => m.default)}
  },
};
