import { boot } from 'quasar/wrappers';
import type { App } from 'vue';

const toKebab = (value: string) =>
  value
    .replace(/\.vue$/, '')
    .replace(/Component$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();

export default boot(({ app }: { app: App }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components = import.meta.glob<{ default: any }>('../components/**/*.vue', {
    eager: true,
  });

  Object.entries(components).forEach(([path, module]) => {
    const fileName = path.split('/').pop() ?? '';
    const name = `dc-${toKebab(fileName)}`;

    if (module && module.default) {
      app.component(name, module.default);
    }
  });
});
