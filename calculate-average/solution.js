function find_average(array) {
  let total = 0
    for (i = 0; i < array.length; i++) {
     total = total += array[i];
    }
    return total/array.length;
  }