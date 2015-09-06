exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++ ) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    arr.forEach(function(e) {
      sum = sum + e;
    });
    return sum;
  },

  remove : function(arr, item) {
    arr.forEach(function(elem, index, array) {
      if (elem === item) {
        arr.splice(index, 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length
    for (var i = length; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++ ) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    arr.forEach(function(e) {
      if (e === item) {
        counter++;
      }
    });
    return counter;
  },

  duplicates : function(arr) {
    var result = [];
    var helperObj = {};
    for (var i = 0; i < arr.length; i++ ) {
      if (!helperObj[arr[i]]) {
        helperObj[arr[i]] = 1;
        continue;
      }
      helperObj[arr[i]]++;

    }
    for (key in helperObj) {
      if (helperObj[key] > 1) {
        result.push(parseInt(key));
      }
    }
    return result.sort();
  },

  square : function(arr) {
    var result = [];
    arr.forEach(function(e) {
      result.push(e*e);
    })
    return result;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++ ) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};
