export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString.length > 0) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
