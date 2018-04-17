function isNice(arr){
  let match = 0;
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i ++) {
    for (let m = 0; m < arr.length; m ++) {
      if (arr[i] === arr[m] + 1 || arr[i] === arr[m] - 1) {
        match += 1;
        m = arr.length;
      }
    }
  }
  return (match < arr.length) ? false : true;
}