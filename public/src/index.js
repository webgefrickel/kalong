import.meta.glob('./index.css', { eager: true });
import.meta.glob('./compositions/**/*.css', { eager: true });
import.meta.glob('./blocks/**/*.css', { eager: true });

const modules = import.meta.glob([
  './blocks/**/*.js',
  './compositions/**/*.js'
]);

// JS has loaded—remove the no-js class
document.documentElement.classList.remove('no-js');

for (const path in modules) {
  if (Object.hasOwn(modules, path)) {
    modules[path]().then((mod) => {
      if (mod.default) mod.default();
    });
  }
}
