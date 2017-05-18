
export function isObjectValueEqual(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (typeof(a[propName]) === 'object') {
      let ret = isObjectValueEqual(a[propName], b[propName])
      if (! ret) {
        return false
      }
      continue
    }
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}
