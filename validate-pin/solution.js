function validatePIN (pin) {
  if (pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){
return(true);
}

else {
return(false);
}