import fs from 'fs'
import path from 'path'
import parsers from './parsers.js'
import formatData from './formatters/index.js'
import buildDiff from './diff.js'

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const buildFullPath = filepath => path.isAbsolute(filepath) ? path.resolve(filepath) : path.resolve(process.cwd(), filepath)
  const readFile = filepath => fs.readFileSync(filepath, 'UTF-8')
  const getFileFormat = filepath => path.extname(filepath).slice(1)
  const content1 = readFile(buildFullPath(filePath1))
  const content2 = readFile(buildFullPath(filePath2))
  const parsedData1 = parsers(content1, getFileFormat(filePath1))
  const parsedData2 = parsers(content2, getFileFormat(filePath2))
  const diffTree = buildDiff(parsedData1, parsedData2)
  return formatData(diffTree, format)
}
export default genDiff
