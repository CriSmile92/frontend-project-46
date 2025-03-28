import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const unionKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys;
};

const compareFiles = (data1, data2) => {
  const keys = getSortedKeys(data1, data2);

  const result = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) return ` + ${key}: ${data2[key]}`;
    if (!Object.hasOwn(data2, key)) return ` - ${key}: ${data1[key]}`;

    return data1[key] === data2[key]
      ? `   ${key}: ${data1[key]}`
      : ` - ${key}: ${data1[key]}\n + ${key}: ${data2[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};
export default compareFiles;
