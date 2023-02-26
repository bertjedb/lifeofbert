import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import glob from 'glob';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';

const build = async (file) => {
  let name = path.parse(file).name;

  const bundle = await rollup({
    input: file,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
      }),
    ],
  });

  if (path.dirname(file).startsWith('js/libraries')) {
    name = name.charAt(0).toUpperCase() + name.substring(1);
  }

  await bundle.write({
    format: 'umd',
    name: name,
    sourcemap: false,
    file: `dist/${file}`,
  });

  await bundle.close();
};

const run = async () => {
  const files = glob.sync('+(js|patterns)/**/*.js');
  await Promise.all(files.map(plugin => build(plugin)));
};

run();
