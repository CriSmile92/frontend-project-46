import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const formatData = (node, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(node);
    case 'plain':
      return formatPlain(node);
    case 'json':
      return formatJson(node);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default formatData;