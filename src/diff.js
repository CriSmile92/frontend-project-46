import _ from 'lodash'

const buildDiff = (obj1, obj2) => {
  const allKeys = _.union(Object.keys(obj1), Object.keys(obj2))
  const result = {}

  allKeys.forEach((key) => {
    const hasKey1 = Object.prototype.hasOwnProperty.call(obj1, key)
    const hasKey2 = Object.prototype.hasOwnProperty.call(obj2, key)

    const val1 = obj1[key]
    const val2 = obj2[key]

    if (!hasKey1) {
      result[key] = { status: 'added', value: val2 }
    } else if (!hasKey2) {
      result[key] = { status: 'removed', value: val1 }
    } else if (_.isObject(val1) && _.isObject(val2)) {
      // если оба объекта — рекурсивно сравниваем
      result[key] = { status: 'nested', children: buildDiff(val1, val2) }
    } else if (val1 !== val2) {
      result[key] = {
        status: 'changed',
        value: val2,
        oldValue: val1,
      }
    } else {
      result[key] = { status: 'unchanged', value: val1 }
    }
  })

  return result
}
export default buildDiff