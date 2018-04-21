function filter_list(l) {
  let newArray = l.filter( function (a) {
    return typeof a === "number"  ;
  });
  return newArray;
  
  
}