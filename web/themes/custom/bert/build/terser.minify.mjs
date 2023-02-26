import glob from 'glob';
import { minify } from 'terser';
import { writeFileSync, readFileSync } from 'fs';

const run = async () => {
  const files = glob.sync('dist/js/**/*.js');

  files.forEach(async (file) => {
    const minified = await minify(readFileSync(file, 'utf8'), {
      mangle: {
        reserved: ['Drupal'],
      },
      keep_classnames: true,
    });

    writeFileSync(file, minified.code, 'utf8');
  });
};

run();
