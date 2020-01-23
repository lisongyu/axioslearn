function deepCopy(source) {
  let target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source !== null) {
        target[key] = deepCopy(source[key])
      } else {
        target[key] = source[key]
      }
    }


  }
  return target
}

function mergeConfig(obj1, obj2) {

  let target = deepCopy(obj1);
  
  let source = deepCopy(obj2);

  Object.keys(source).reduce((t, k) => {

    if (['url', 'method', 'baseURL'].includes(k)) {
      t[k] = source[k]
    }

    if (['headers'].includes(k)) {

      // t[k] = Object.assign(target[k], source[k]);
      t[k] = Object.assign(target[k], source[k]);
     
    }

    return t
  }, target)

  return target




}
export {
  deepCopy,
  mergeConfig
}