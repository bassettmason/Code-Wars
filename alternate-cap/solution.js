function capitalize(s){
  let odd = ''
  let even = ''
  for(i= 0; i < s.length; i++) {
    if (i % 2 == 0) {
      odd += s[i].toUpperCase();
      even += s[i];
    }else {
      odd += s[i];
      even += s[i].toUpperCase();
    }
  }
return [odd, even]

};