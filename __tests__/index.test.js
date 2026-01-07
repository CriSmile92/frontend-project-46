import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test, expect } from '@jest/globals'
import genDiff from '../src/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixture = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')
// eslint-disable-next-line
describe('genDiff', () => {
  test('JSON format', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json'))
      .toEqual(readFixture('result_json.txt'))
  })

  test('plain format', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain'))
      .toEqual(readFixture('result_plain.txt'))
  })

  test('stylish format', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish'))
      .toEqual(readFixture('result_stylish.txt'))
  })
})
