import path from 'path';
import { readFileSync } from 'fs';
import parser from './parser.js';


    const getFileType = (filepath) => path.extname(filepath).slice(1);
    const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
    const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

    const app = (filePath1, filePath2) => {

      const ext1 = getFileType(filePath1);
      const path1 = getFilePath(filePath1);
      const data1 = readFile(path1);
      const ext2 = getFileType(filePath2);
      const path2 = getFilePath(filePath2);
      const data2 = readFile(path2);
      const parseData1 = parser(data1, ext1);
      const parseData2 = parser(data2, ext2);
      return {parseData1, parseData2};
    } 
export default app;






