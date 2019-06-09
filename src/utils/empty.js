export default function isEmpty(value) {
  if (typeof value === 'undefined') {
    return true;
  } else if (value === null) {
    return true;
  } else if (typeof value === 'string' && !value.trim().length) {
    return true;
  }
  return false;
}
