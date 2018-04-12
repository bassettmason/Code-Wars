function insertDash(num) {
  let newString = '';
  let	hey = num.toString();
  
  for (var i=0; i<hey.length; i++){

    if (parseInt(hey[i])%2 == 1 && parseInt(hey[i+1])%2 == 1 ){
    newString = newString + hey[i] + '-';
    }else {
    newString = newString + hey[i];
  
    }
  }
  
  return newString