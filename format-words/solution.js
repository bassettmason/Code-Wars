function formatWords(words){
  console.log(words);
  if (words === null) {
  return '';}
  
  let newString = words.filter(word => word !== '').join(', ');
  console.log(newString);
  console.log(newString.replace(/(, )+(\S+)$/, ' and $2'))
  return newString.replace(/(, )+(\S+)$/, ' and $2')
  
  }
