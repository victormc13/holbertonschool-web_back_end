export default function cleanSet(setObject, startString) {
  let result = '';
  setObject.forEach((value) => {
    if (value.startsWith(startString)) {
      result += value.slice(startString.length) + '-'
    }
  })
  return result.slice(0,
    -1)
}