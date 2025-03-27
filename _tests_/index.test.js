import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => readFileSync(getFilePath(file), 'utf-8');

test('Nested JSON files 1 in Stylish format', () => {
  expect(getDiff(getFilePath('file1.json'), getFilePath('file2.json'))).toEqual(readFile('result.txt').trim());
});

test('Nested flat YAML files in Stylish format', () => {
  expect(getDiff(getFilePath('file1.yml'), getFilePath('file2.yml'))).toEqual(readFile('result.txt').trim());
});
