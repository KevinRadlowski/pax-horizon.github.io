
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pax-horizon.github.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pax-horizon.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 56887, hash: 'b9a114da5f6b037c3bc4eb3a4aae25b5dc4fae95bfdbe87666b82f9d25785092', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17187, hash: 'c309bc620ad028085a822a8c01bc5257df93a085d84503e271b5609c9361aa1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105973, hash: 'b8cd8819871fe18e7ca9ddade99d7f595355a8f4543175b5f742bf1bcc41c7b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ADAYIW4N.css': {size: 315927, hash: 'UN0zNp9lB3c', text: () => import('./assets-chunks/styles-ADAYIW4N_css.mjs').then(m => m.default)}
  },
};
