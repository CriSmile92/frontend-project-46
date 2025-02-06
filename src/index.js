import path from 'path';
import { readFileSync } from 'fs';
import parser from './parser.js';
import compareFiles from './comparefiles.js'; 

    const getFileType = (filepath) => path.extname(filepath).slice(1);
    const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
    const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

    const genDiff = (filePath1, filePath2) => {

      const ext1 = getFileType(filePath1);
      const path1 = getFilePath(filePath1);
      //console.log(ext1);
      const data1 = readFile(path1);
      //console.log(data1);
      const ext2 = getFileType(filePath2);
      const path2 = getFilePath(filePath2);
      const data2 = readFile(path2);
      const parseData1 = parser(data1, ext1);
      const parseData2 = parser(data2, ext2);
      const result = compareFiles(parseData1, parseData2);
      //console.log(result)
      return result;;
    }
export default genDiff;


