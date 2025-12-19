import fs from 'fs'
import path from 'path'
import parsers from './parsers.js'
import _ from 'lodash'

const genDiff = (filepath1, filepath2) => {
  const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8')
  const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8')

  const extname1 = path.extname(filepath1).slice(1)
  const extname2 = path.extname(filepath2).slice(1)

  const parsedData1 = parsers(content1, extname1)
  const parsedData2 = parsers(content2, extname2)

  const allKeys = _.union(Object.keys(parsedData1), Object.keys(parsedData2))
  const diff = {}

  allKeys.forEach((key) => {
    const hasKey1 = Object.prototype.hasOwnProperty.call(parsedData1, key)
    const hasKey2 = Object.prototype.hasOwnProperty.call(parsedData2, key)

    const val1 = parsedData1[key]
    const val2 = parsedData2[key]

    if (!hasKey1) {
      diff[key] = { status: 'added', value: val2 }
    } else if (!hasKey2) {
      diff[key] = { status: 'removed', value: val1 }
    } else if (val1 !== val2) {
      diff[key] = {
        status: 'changed',
        value: val2,
        oldValue: val1,
      }
    } else {
      diff[key] = { status: 'unchanged', value: val1 }
    }
  })

  const lines = Object.entries(diff).map(([key, info]) => {
    switch (info.status) {
      case 'added':
        return `+ ${key}: ${info.value}`
      case 'removed':
        return `- ${key}: ${info.value}`
      case 'changed':
        return `- ${key}: ${info.oldValue}\n+ ${key}: ${info.value}`
      case 'unchanged':
        return `  ${key}: ${info.value}`
      default:
        return ''
    }
  })
  return ['{', ...lines, '}'].join('\n')
}
export default genDiff
