import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Nested JSON files 1 in Stylish format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result_stylish.txt').trim());
});

test('Nested flat YAML files in Stylish format', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result_stylish.txt').trim());
});

test('Nested JSON files in Plain format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('result_plain.txt').trim());
});

test('Nested JSON files in Json format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(readFile('result_json.txt').trim());
});