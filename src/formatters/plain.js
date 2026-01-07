const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) return '[complex value]'
  return typeof value === 'string' ? `'${value}'` : value
}

const formatPlain = (tree, currentPath = '') => {
  const lines = tree.flatMap((node) => {
    const fullPath = currentPath ? `${currentPath}.${node.key}` : node.key

    switch (node.type) {
      case 'nested':
        return formatPlain(node.children, fullPath)
      case 'added':
        return `Property '${fullPath}' was added with value: ${formatValue(node.value)}`
      case 'removed':
        return `Property '${fullPath}' was removed`
      case 'changed':
        return `Property '${fullPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`
      case 'unchanged':
        return []
      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  })
  return lines.join('\n')
}

export default formatPlain
