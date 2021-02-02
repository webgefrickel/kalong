const mandelbrot = require('@frctl/mandelbrot');
const path = require('path');
const kalong = require('../kalong.config');

let handles = null;

// for additional data-route
function getHandles(app) {
  app.components.on('updated', () => {
    handles = null;
  });
  if (handles) {
    return handles;
  }

  handles = [];
  app.components.flatten().each(comp => {
    handles.push(comp.handle);
    if (comp.variants().size > 1) {
      comp.variants().each(variant => handles.push(variant.handle));
    }
  });
  handles = handles.map(h => ({ handle: h }));
  return handles;
}

const subTheme = mandelbrot({
  favicon: '/subtheme/favicon.ico',
  format: 'yaml',
  lang: 'en',
  nav: ['docs', 'components', 'information'],
  panels: ['html', 'view', 'resources', 'context', 'notes', 'info'],
  rtl: false,
  skin: 'black',
  styles: ['default', '/subtheme/styleguide.css'],
  information: [
    {
      label: 'Version',
      value: kalong.version,
    },
    {
      label: 'Last build',
      value: new Date(),
      type: 'time',
      format: value => value.toLocaleDateString('de-DE'),
    },
  ],
});

subTheme.addLoadPath(path.join(__dirname, '/views'));
subTheme.addStatic(path.join(__dirname, '/dist'), '/subtheme');

subTheme.addRoute(
  '/components/data/:handle',
  {
    handle: 'data',
    view: 'pages/components/data.nunj',
  },
  getHandles,
);

module.exports = subTheme;
