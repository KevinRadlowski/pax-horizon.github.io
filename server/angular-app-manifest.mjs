
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pax-horizon/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pax-horizon"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 56878, hash: '9cd6a2260e54a25728cd8a67b674cc546390740b6262a75c586d178ad3f82348', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17178, hash: '68c3ae2f04a08d81dded91052ac56fad2f9f43676bb2f9a143bd1095ef3736e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105964, hash: 'b9784c9ca00da9a39aebbb1157586bbb40329198f6618a1e49c7bdcc0303b331', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ADAYIW4N.css': {size: 315927, hash: 'UN0zNp9lB3c', text: () => import('./assets-chunks/styles-ADAYIW4N_css.mjs').then(m => m.default)}
  },
};
