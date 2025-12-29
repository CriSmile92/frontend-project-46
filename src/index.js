import fs from 'fs'
import path from 'path'
import parsers from './parsers.js'
import _ from 'lodash'
import formatData from './formatters/index.js'
import buildDiff from './diff.js'


const genDiff = (filePath1, filePath2, format = 'stylish') => {
const buildFullPath = (filepath) => path.isAbsolute ? path.resolve(filepath) : path.resolve(process.cwd(),filepath)
const readFile = (filePath) => fs.readFileSync(filePath, 'UTF-8');
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

  /*const folderPath = './__fixtures__'
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Ошибка:", err);
    return;
  }
  console.log("Содержимое папки:", files)
});*/
  const content1 = readFile(buildFullPath(filePath1));
  const content2 = readFile(buildFullPath(filePath2));
  const parsedData1 = parsers(content1, getFileFormat(filePath1));
  const parsedData2 = parsers(content2, getFileFormat(filePath2));

  const diffTree = buildDiff(parsedData1, parsedData2)

  return formatData(diffTree, format)
  
}
export default genDiff