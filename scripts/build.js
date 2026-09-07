const { copyFile, mkdir, rm } = require('node:fs/promises');
const { join } = require('node:path');

const outputDirectory = join(process.cwd(), 'dist');

async function build() {
  await rm(outputDirectory, { force: true, recursive: true });
  await mkdir(outputDirectory, { recursive: true });
  await copyFile(
    join(process.cwd(), 'index.html'),
    join(outputDirectory, 'index.html'),
  );
}

build().catch((error) => {
  console.error('Unable to build the static site:', error);
  process.exitCode = 1;
});
