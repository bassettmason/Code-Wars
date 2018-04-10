function abbrevName(name){
  let first = name.charAt(0);
  let second = name.charAt(name.search(' ') + 1);
  
  
  return(first + '.' + second);

}