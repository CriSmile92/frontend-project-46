
export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data)
  }
  throw Error('unknown format')
}