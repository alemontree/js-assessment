exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = [str.charAt(0)];
    var counter = 1;

    for (i = 1; i < str.length; i++) {
      if (str.charAt(i) === str.charAt(i-1)) {
        if (counter === amount) {
          continue;
        }
        else {
        counter++;
        result.push(str.charAt(i));
        }
      }
      else {
        counter = 1;
        result.push(str.charAt(i));
      }
    }
    return result.join('');

  },

  wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var returnString = arr[0];
    var columnCounter = arr[0].length-1;

    for (var i = 1; i < arr.length; i++ ) {
      columnCounter = columnCounter + arr[i].length;
      if (columnCounter >= cols) {
        returnString = returnString.concat('\n', arr[i]);
        columnCounter = arr[i].length-1;
      }
      else {
        returnString = returnString.concat(' ', arr[i]);
        columnCounter++;
      }
    }
    return returnString;
  },

  reverseString: function(str) {
    var result = [];
    for (var i = str.length-1; i >= 0; i--) {
      result.push(str.charAt(i));
    }
    return result.join('');
  }
};
