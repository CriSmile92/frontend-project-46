import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return formatJson(data);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default formatData;