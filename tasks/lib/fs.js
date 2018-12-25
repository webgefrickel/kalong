import fs from 'fs';
import mkdirp from 'mkdirp';

export const readFile = file =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) => (error ? reject(error) : resolve(data)));
  });

export const writeFile = (file, contents) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, contents, 'utf8', error => (error ? reject(error) : resolve()));
  });

export const renameFile = (src, dest) =>
  new Promise((resolve, reject) => {
    fs.rename(src, dest, error => (error ? reject(error) : resolve()));
  });

export const copyFile = (src, dest) =>
  new Promise((resolve, reject) => {
    let cbCalled = false;
    function done(error) {
      if (!cbCalled) {
        cbCalled = true;
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    }

    const read = fs.createReadStream(src);
    read.on('error', error => done(error));

    const write = fs.createWriteStream(dest);
    write.on('error', error => done(error));
    write.on('close', error => done(error));
    read.pipe(write);
  });

export const makeDir = name =>
  new Promise((resolve, reject) => {
    mkdirp(name, error => (error ? reject(error) : resolve()));
  });

export default {
  readFile,
  writeFile,
  renameFile,
  copyFile,
  makeDir,
};
