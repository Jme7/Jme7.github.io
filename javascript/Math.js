function arrayPlus(array) {
  var v = "unknown error";
  if (array.length < 1) {
    v = "array can not be empty";
  } else if (array.length === 1) {
    v = array[0];
  } else if (array.length > 1) {
    var iv = 0;
    for (var i = 0; i < array.length; i++) {
      iv += array[i];
    }
    v = iv;
  }
  return v;
}
function arrayMinus(array) {
  var v = "unknown error";
  if (array.length < 1) {
    v = "array can not be empty";
  } else if (array.length === 1) {
    v = array[0];
  } else if (array.length > 1) {
    var iv = array[0];
    for (var i = 1; i < array.length; i++) {
      iv -= array[i];
    }
    v = iv;
  }
  return v;
}
function arrayTimes(array) {
  var v = "unknown error";
  if (array.length < 1) {
    v = "array can not be empty";
  } else if (array.length === 1) {
    v = array[0];
  } else if (array.length > 1) {
    var iv = 1;
    for (var i = 0; i < array.length; i++) {
      iv *= array[i];
    }
    v = iv;
  }
  return v;
}
function arrayDividedBy(array) {
  var v = "unknown error";
  if (array.length < 1) {
    v = "array can not be empty";
  } else if (array.length === 1) {
    v = array[0];
  } else if (array.length > 1) {
    var iv = array[0];
    for (var i = 1; i < array.length; i++) {
      iv /= array[i];
    }
    v = iv;
  }
  return v;
}
function factorial(n) {
  var v = "math dosn't work ...or there's just a bug in the program...";
  if (v <= 0) {
    v = 1;
  } else if (v >= 1) {
    v = n * fact(v);
  }
  return v;
}
function floor(n) {
  return n - (n%1);
}
function ceiling(n) {
  return (n - (n%1))+1;
}
function round(n, place) {
  if (place = null) {
    place = 0;
  }
  var decimals = n%1;
  var v = "error";
  if (decimals[place] < 5) {
    v = n - (n%1);
  }
  if (decimals[place] = 5) {
    round(n, place + 1);
  }
  if (decimals[place] > 5) {
    v = (n - (n%1))+1;
  }
  return v;
}
