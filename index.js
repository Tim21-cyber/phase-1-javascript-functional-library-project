function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}
function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(value) {
        result.push(callback(value));
    });
    return result;
    }
function myReduce(collection, callback, initialValue) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    const keys = isArray ? null : Object.keys(collection);

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    }
    else {
        if (values.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        const value = values[i];
        if (isArray) {
            accumulator = callback(accumulator, value, collection);
        } else {
            accumulator = callback(accumulator, value, collection[keys[i]]);
        }
    }
    return accumulator;
}
function myFind(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
            return values[i];
        }
    }
    return undefined;
}
function myFilter(collection, callback) {
    const result = [];
    myEach(collection, function(value) {
        if (callback(value)) {
            result.push(value);
        }
    });
    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}
function myFirst(collection, n) {
    if (n === undefined) {
        return Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
    } else {
        return Array.isArray(collection) ? collection.slice(0, n) : Object.values(collection).slice(0, n);
    }
}
function myLast(collection, n) {
    if (n === undefined) {
        return Array.isArray(collection) ? collection[collection.length - 1] : Object.values(collection)[Object.values(collection).length - 1];
    } else {
        return Array.isArray(collection) ? collection.slice(-n) : Object.values(collection).slice(-n);
    }
}
function myKeys(collection) {
    if (Array.isArray(collection)) {
        return collection.map((_, index) => index);
    } else {
        return Object.keys(collection);
    }
}
function myValues(collection) {
    if (Array.isArray(collection)) {
        return collection.slice();
    } else {
        return Object.values(collection);
    }
}





