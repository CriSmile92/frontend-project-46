import _ from 'lodash'

const indentSize = 4;

const getIndent = (depth, sign = ' ') => ' '.repeat(depth * indentSize - 2) + sign + ' ';

const valueToString = (value, depth) => {
  if (_.isObject(value)) {
    const indent = getIndent(depth);
    const lines = Object.entries(value).map(
      ([key, val]) => `${indent}${key}: ${valueToString(val, depth + 1)}`
    );
    const braceIndent = ' '.repeat((depth - 1) * indentSize);
    return `{\n${lines.join('\n')}\n${braceIndent}}`;
  }
  return String(value);
};

const formatStylish = (tree, depth = 1) => {
  const lines = Object.entries(tree).map(([key, node]) => {
    switch (node.status) {
      case 'nested':
        return `${getIndent(depth, ' ')}  ${key}: ${formatStylish(node.children, depth + 1)}`;
      case 'added':
        return `${getIndent(depth)}+ ${key}: ${valueToString(node.value, depth + 1)}`;
      case 'removed':
        return `${getIndent(depth)}- ${key}: ${valueToString(node.value, depth + 1)}`;
      case 'changed':
        return [
          `${getIndent(depth)}- ${key}: ${valueToString(node.oldValue, depth + 1)}`,
          `${getIndent(depth)}+ ${key}: ${valueToString(node.value, depth + 1)}`
        ].join('\n');
      case 'unchanged':
        return `${getIndent(depth)}  ${key}: ${valueToString(node.value, depth + 1)}`;
      default:
        return '';
    }
  });
  return `{\n${lines.join('\n')}\n${' '.repeat((depth - 1) * indentSize)}}`;
};

export default formatStylish