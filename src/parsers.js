import yaml from 'js-yaml'

export default (node, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(node)
    case 'yml':
      return yaml.load(node)
    case 'yaml':
      return yaml.load(node)
    default:
      throw Error('unknown format')
  }
}
