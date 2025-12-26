import fs from 'fs'
import path from 'path'
import parsers from './parsers.js'
import _ from 'lodash'
import formatData from './formatters/index.js'
import buildDiff from './diff.js'



const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8')
  const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8')

  const extname1 = path.extname(filepath1).slice(1)
  const extname2 = path.extname(filepath2).slice(1)

  const parsedData1 = parsers(content1, extname1)
  const parsedData2 = parsers(content2, extname2)

  const diffTree = buildDiff(parsedData1, parsedData2)

  return formatData(diffTree, format)
}

export default genDiff
